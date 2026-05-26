import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudiesData'
import './Work.css'

export default function Work() {
  const professional = caseStudies.filter((cs) => cs.type === 'professional')
  const personal = caseStudies.filter((cs) => cs.type === 'personal')

  return (
    <div className="container">
      <div className="work-header">
        <h1 className="work-title">Selected Work</h1>
        <p className="work-subtitle">
          A collection of projects spanning enterprise architecture, performance engineering,
          and frontend craft.
        </p>
      </div>

      <section className="work-group">
        <h3 className="work-group-label">Professional</h3>
        <div className="work-list">
          {professional.map((cs) => (
            <Link key={cs.id} to={`/work/${cs.slug}`} className="work-card">
              <div className="work-card-body">
                <div className="work-card-header">
                  <h2 className="work-card-title">{cs.title}</h2>
                  <span className="work-card-meta">
                    {cs.company}
                    {cs.period && <span className="work-card-period"> · {cs.period}</span>}
                  </span>
                </div>
                <p className="work-card-summary">{cs.summary}</p>
                <div className="work-card-tags">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="work-card-cta">View case study →</span>
            </Link>
          ))}
        </div>
      </section>

      {personal.length > 0 && (
        <>
          <hr className="divider" />
          <section className="work-group">
            <h3 className="work-group-label">Personal</h3>
            <div className="work-list">
              {personal.map((cs) => (
                <Link key={cs.id} to={`/work/${cs.slug}`} className="work-card">
                  <div className="work-card-body">
                    <div className="work-card-header">
                      <h2 className="work-card-title">{cs.title}</h2>
                      <span className="work-card-meta">{cs.period}</span>
                    </div>
                    <p className="work-card-summary">{cs.summary}</p>
                    <div className="work-card-tags">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="work-card-cta">View case study →</span>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
