import { Routes, Route } from 'react-router-dom'
import { CaseStudy, Home, Resume, Work } from './pages'
import Layout from './components/Layout'
import Book from './pages/Book'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="book" element={<Book />} />
      </Route>
    </Routes>
  )
}

export default App