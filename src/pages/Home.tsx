import avatarImg from '../assets/avatar.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-avatar-clip">
          <img src={avatarImg} alt="Clinton Findlay" className="hero-avatar" />
        </div>
        <h1 className="hero-name">Clinton Findlay</h1>
        <p className="hero-bio">
          Product designer &amp; developer crafting thoughtful digital experiences.
          Currently open to new opportunities.
        </p>
        <div className="hero-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="pill">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="pill">
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="pill">
            Email
          </a>
        </div>
      </section>
    </div>
  )
}
