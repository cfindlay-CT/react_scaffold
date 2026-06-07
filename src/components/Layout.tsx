import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <header className="nav">
        <div className="container nav-inner">
          <NavLink to="/" className="nav-logo">
            Clinton Findlay
          </NavLink>
          <nav className="nav-links">
            <NavLink
              to="/resume"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Work
            </NavLink>
            <NavLink to="/book" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Book a Call
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
