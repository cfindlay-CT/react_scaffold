import { resumeData } from '../data/resumeData'
import './Resume.css'

export default function Resume() {
  const { title, subtitle, summary, experience, education, skills, projects, links } = resumeData

  return (
    <div className="container">

      {/* Page header */}
      <div className="resume-header">
        <div>
          <h1 className="resume-title">{title}</h1>
          <p className="resume-subtitle">{subtitle}</p>
          <p className="resume-summary">{summary}</p>
        </div>
        <div className="resume-header-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="pill"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Experience */}
      <section className="resume-section">
        <div className="resume-section-label">
          <h3>Experience</h3>
        </div>
        <div className="resume-section-content">
          {experience.map((job, i) => (
            <div key={job.id} className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h2 className="resume-item-title">{job.title}</h2>
                  <span className="resume-item-sub">{job.company}</span>
                </div>
                <span className="resume-item-period">{job.period}</span>
              </div>
              <p className="resume-item-desc">{job.description}</p>
              {i < experience.length - 1 && <hr className="resume-item-divider" />}
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Selected Projects */}
      <section className="resume-section">
        <div className="resume-section-label">
          <h3>Projects</h3>
        </div>
        <div className="resume-section-content">
          {projects.map((project, i) => (
            <div key={project.id} className="resume-item">
              <h2 className="resume-item-title">{project.title}</h2>
              <p className="resume-item-desc">{project.description}</p>
              {i < projects.length - 1 && <hr className="resume-item-divider" />}
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Education */}
      <section className="resume-section">
        <div className="resume-section-label">
          <h3>Education</h3>
        </div>
        <div className="resume-section-content">
          {education.map((edu) => (
            <div key={edu.id} className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h2 className="resume-item-title">{edu.degree}</h2>
                  <span className="resume-item-sub">{edu.school}</span>
                </div>
                {edu.period && <span className="resume-item-period">{edu.period}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Skills */}
      <section className="resume-section">
        <div className="resume-section-label">
          <h3>Skills</h3>
        </div>
        <div className="resume-section-content">
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
