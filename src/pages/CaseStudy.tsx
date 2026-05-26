import { useParams, Link, Navigate } from 'react-router-dom'
import { getCaseStudyBySlug } from '../data/caseStudiesData'
import './CaseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const cs = getCaseStudyBySlug(slug ?? '')

  if (!cs) return <Navigate to="/work" replace />

  return (
    <div className="container">

      {/* Back link */}
      <div className="cs-back">
        <Link to="/work" className="cs-back-link">← Work</Link>
      </div>

      {/* Page header */}
      <div className="cs-header">
        <div className="cs-header-meta">
          <span className={`cs-type-badge cs-type-badge--${cs.type}`}>
            {cs.type === 'professional' ? 'Professional' : 'Personal'}
          </span>
          {cs.company && <span className="cs-company">{cs.company}</span>}
          {cs.period && <span className="cs-period">{cs.period}</span>}
        </div>
        <h1 className="cs-title">{cs.title}</h1>
        <p className="cs-subtitle">{cs.subtitle}</p>
      </div>

      <hr className="divider" />

      {/* 1. Executive Summary */}
      <section className="cs-section">
        <div className="cs-section-label"><h3>1. Executive Summary</h3></div>
        <div className="cs-section-content">
          <p className="cs-body">{cs.executiveSummary}</p>
        </div>
      </section>

      <hr className="divider" />

      {/* 2. The Challenge */}
      <section className="cs-section">
        <div className="cs-section-label"><h3>2. The Challenge</h3></div>
        <div className="cs-section-content">
          <h2 className="cs-section-title">"{cs.challengeTitle}"</h2>
          <p className="cs-body">{cs.challengeIntro}</p>
          <ul className="cs-points">
            {cs.challengePoints.map((point) => (
              <li key={point.label} className="cs-point">
                <span className="cs-point-label">{point.label}:</span>{' '}
                {point.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="divider" />

      {/* 3. The Architecture */}
      <section className="cs-section">
        <div className="cs-section-label"><h3>3. The Architecture</h3></div>
        <div className="cs-section-content">
          <h2 className="cs-section-title">{cs.architectureSubtitle}</h2>
          <p className="cs-body">{cs.architectureIntro}</p>
          <p className="cs-components-heading">Key Components:</p>
          <ul className="cs-points">
            {cs.architectureComponents.map((component) => (
              <li key={component.label} className="cs-point">
                <span className="cs-point-label">{component.label}:</span>{' '}
                {component.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="divider" />

      {/* 4. Key Engineering Innovations */}
      <section className="cs-section">
        <div className="cs-section-label"><h3>4. Key Engineering Innovations</h3></div>
        <div className="cs-section-content">
          {cs.innovations.map((innovation) => (
            <div key={innovation.letter} className="cs-innovation">
              <h4 className="cs-innovation-title">
                {innovation.letter}. {innovation.title}
              </h4>
              <p className="cs-body">{innovation.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* 5. Results & Impact */}
      <section className="cs-section">
        <div className="cs-section-label"><h3>5. Results &amp; Impact</h3></div>
        <div className="cs-section-content">
          <ul className="cs-points">
            {cs.results.map((result) => (
              <li key={result.label} className="cs-point">
                <span className="cs-point-label">{result.label}:</span>{' '}
                {result.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="divider" />

      {/* 6. Technical Stack Overview */}
      <section className="cs-section cs-section--last">
        <div className="cs-section-label"><h3>6. Technical Stack</h3></div>
        <div className="cs-section-content">
          <ul className="cs-stack-list">
            {cs.stackCategories.map((item) => (
              <li key={item.label} className="cs-stack-item">
                <span className="cs-point-label">{item.label}:</span>{' '}
                <span className="cs-stack-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}
