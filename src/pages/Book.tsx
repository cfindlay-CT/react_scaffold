import { useEffect, useRef, useState } from 'react'
import './Book.css'

interface ChatTurn {
  role: 'user' | 'assistant'
  content: string
}

interface ChatResponseBody {
  session_id: string
  reply: string
  history: ChatTurn[]
}

const API_URL = import.meta.env.VITE_CHAT_API_URL ?? 'http://localhost:7071/api/chat'
const API_KEY = import.meta.env.VITE_CHAT_API_KEY ?? ''
const SESSION_STORAGE_KEY = 'book_chat_session_id'
const GREETING = "Hi! I'm Clinton's booking assistant. Tell me a bit about what you'd like to discuss and I'll find a time that works."

function loadSessionId(): string | null {
  try {
    return window.sessionStorage.getItem(SESSION_STORAGE_KEY)
  } catch {
    return null
  }
}

function saveSessionId(id: string) {
  try {
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, id)
  } catch {
    // sessionStorage unavailable (private mode, etc) - fine, just won't persist across reload
  }
}

export default function Book() {
  const [messages, setMessages] = useState<ChatTurn[]>([{ role: 'assistant', content: GREETING }])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const sessionIdRef = useRef<string | null>(loadSessionId())
  const historyRef = useRef<ChatTurn[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    const text = input.trim()
    if (!text || sending) return

    setMessages(prev => [...prev, { role: 'user', content: text }])
    setInput('')
    setSending(true)

    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (API_KEY) headers['X-Api-Key'] = API_KEY

      const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          message: text,
          history: historyRef.current,
        }),
      })

      if (res.status === 429) throw new Error('rate-limited')
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)

      const data: ChatResponseBody = await res.json()
      sessionIdRef.current = data.session_id
      saveSessionId(data.session_id)
      historyRef.current = data.history ?? historyRef.current
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      console.error('[book-chat]', err)
      const message =
        err instanceof Error && err.message === 'rate-limited'
          ? "You're sending messages a bit fast - please wait a moment and try again."
          : 'Sorry, something went wrong reaching the assistant. Please try again.'
      setMessages(prev => [...prev, { role: 'assistant', content: message }])
    } finally {
      setSending(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="container">
      <h1>Book a 15-min Call</h1>
      <p>Chat with my booking assistant to find a time that works for you.</p>

      <div className="chat-panel">
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg chat-msg-${msg.role}`}>
              {msg.content}
            </div>
          ))}
          {sending && <div className="chat-msg chat-msg-assistant chat-msg-pending">...</div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-inputrow">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            disabled={sending}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage} disabled={sending || !input.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
