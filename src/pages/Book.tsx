import { useState } from 'react'
import { BOOKING_WINDOW_WEEKS, weeklySchedule, blockedDates } from '../data/availability'

export default function Book() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const maxDate = new Date(today)
  maxDate.setDate(today.getDate() + BOOKING_WINDOW_WEEKS * 7)

  function isAvailable(date: Date): boolean {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
    const dateStr = date.toISOString().slice(0, 10)
    if (blockedDates.includes(dateStr)) return false
    if (date < today || date > maxDate) return false
    return (weeklySchedule[dayName] ?? []).length > 0
  }

  const days: Date[] = []
  const cursor = new Date(today)
  cursor.setDate(cursor.getDate() - cursor.getDay())

  while (cursor <= maxDate || days.length % 7 !== 0) {
    days.push(new Date(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }

  function buildMailtoLink(): string {
    if (!selectedDate || !selectedSlot) return ''

    const [hour, minute] = selectedSlot.split(':').map(Number)
    const start = new Date(selectedDate)
    start.setHours(hour, minute, 0, 0)

    const end = new Date(start)
    end.setMinutes(end.getMinutes() + 15)

    const timeLabel = start.toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    })

    const subject = encodeURIComponent(`15-min call request — ${timeLabel}`)
    const body = encodeURIComponent(
      `Hi Clinton,\n\nI'd like to book a 15-min call.\n\nTime: ${timeLabel}\nName: ${form.name}\nEmail: ${form.email}\n\n${form.note}`
    )

    return `mailto:cfindlay@comtopllc.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="container">
      <h1>Book a 15-min Call</h1>
      <p>Pick a date, then choose a time that works for you.</p>

      {/* 1. Calendar grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', maxWidth: '420px' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} style={{ textAlign: 'center', fontWeight: 'bold', padding: '4px' }}>{d}</div>
        ))}
        {days.map((day, i) => {
          const available = isAvailable(day)
          const isSelected = selectedDate?.toDateString() === day.toDateString()
          const isPast = day < today
          return (
            <button
              key={i}
              onClick={() => available && setSelectedDate(day)}
              disabled={!available}
              style={{
                padding: '8px',
                background: isSelected ? '#0078d4' : available ? '#e8f4fd' : 'transparent',
                color: isSelected ? 'white' : isPast ? '#ccc' : 'inherit',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: available ? 'pointer' : 'default',
              }}
            >
              {day.getDate()}
            </button>
          )
        })}
      </div>

      {/* 2. Time slots — only shows when a date is selected */}
      {selectedDate && (() => {
        const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
        const slots = weeklySchedule[dayName] ?? []
        return (
          <div style={{ marginTop: '24px' }}>
            <h2>{selectedDate.toDateString()}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              {slots.map(slot => {
                const [hour, minute] = slot.split(':').map(Number)
                const slotDate = new Date(selectedDate)
                slotDate.setHours(hour, minute, 0, 0)
                const label = slotDate.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  timeZoneName: 'short',
                })
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #0078d4',
                      borderRadius: '4px',
                      background: selectedSlot === slot ? '#0078d4' : 'white',
                      color: selectedSlot === slot ? 'white' : '#0078d4',
                      cursor: 'pointer',
                    }}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })()}

      {/* 3. Booking form — only shows when a slot is selected */}
      {selectedSlot && (
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
          <h3>Your details</h3>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            placeholder="Your email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <textarea
            placeholder="What would you like to discuss? (optional)"
            value={form.note}
            onChange={e => setForm({ ...form, note: e.target.value })}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '80px' }}
          />
          <a
            href={buildMailtoLink()}
            onClick={() => setSubmitted(true)}
            style={{
              display: 'block',
              padding: '10px',
              background: !form.name || !form.email ? '#ccc' : '#0078d4',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: !form.name || !form.email ? 'default' : 'pointer',
              textAlign: 'center',
              textDecoration: 'none',
              pointerEvents: !form.name || !form.email ? 'none' : 'auto',
            }}
          >
            Request this time
          </a>
        </div>
      )}

      {submitted && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
        }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '32px',
            maxWidth: '360px',
            textAlign: 'center',
          }}>
            <h2>Request sent!</h2>
            <p>Thanks {form.name}, Clinton will reply to <strong>{form.email}</strong> to confirm your time.</p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                background: '#0078d4',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}