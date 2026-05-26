export interface LabeledPoint {
  label: string
  description: string
}

export interface Innovation {
  letter: string
  title: string
  description: string
}

export interface StackCategory {
  label: string
  value: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  subtitle: string
  company: string | null
  period: string
  type: 'professional' | 'personal'
  tags: string[]
  summary: string

  executiveSummary: string

  challengeTitle: string
  challengeIntro: string
  challengePoints: LabeledPoint[]

  architectureSubtitle: string
  architectureIntro: string
  architectureComponents: LabeledPoint[]

  innovations: Innovation[]

  results: LabeledPoint[]

  stackCategories: StackCategory[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    slug: 'analytics-bridge',
    title: 'Engineering a High-Scale Analytics Bridge',
    subtitle: 'Architecting a Seamless Migration from Legacy Flat-Files to a Modern Relational Data Warehouse',
    company: null,
    period: '',
    type: 'professional',
    tags: ['Node.js', 'Graph Database', 'SQL', 'Serverless'],
    summary:
      'Replaced a fragile legacy flat-file reporting pipeline with a robust, automated synchronization engine — enabling real-time DAU/WAU/MAU tracking and reducing system latency by 60%.',

    executiveSummary:
      'This case study explores the modernization of a business intelligence (BI) pipeline within a global enterprise application. The project involved replacing a fragile, legacy file-transfer reporting system with a robust, automated synchronization engine. The new architecture enables real-time engagement tracking (DAU/WAU/MAU), user retention analysis, and granular feature-usage metrics, providing stakeholders with actionable data while reducing system latency by 60%.',

    challengeTitle: 'The Data Blind Spot',
    challengeIntro:
      'The organization relied on an aging process where application servers generated massive CSV files once every 24 hours and uploaded them via FTP to a central server. This approach suffered from three critical flaws:',
    challengePoints: [
      {
        label: 'Data Fragility',
        description:
          'Intermittent network failures often led to incomplete reports or "missing days" in the analytics dashboard.',
      },
      {
        label: 'Performance Bottlenecks',
        description:
          'The resource-heavy extraction process competed with live user traffic, occasionally slowing down the production environment.',
      },
      {
        label: 'Limited Insight',
        description:
          'Complex metrics, such as "Rolling 7-Day Retention," were impossible to calculate using flat files, leaving the business unable to measure user loyalty accurately.',
      },
    ],

    architectureSubtitle: 'A Multi-Modal Solution',
    architectureIntro:
      'The solution required bridging two distinct data worlds: a high-speed Graph Database (optimized for user relationships and sessions) and a Relational Data Warehouse (optimized for BI aggregation and historical trending).',
    architectureComponents: [
      {
        label: 'The Orchestration Layer',
        description:
          'A serverless event-driven function designed to trigger during low-traffic windows to aggregate data without impacting the user experience.',
      },
      {
        label: 'The Extraction Engine',
        description:
          'A sophisticated query layer capable of navigating complex graph relationships to calculate rolling engagement windows (1-day, 7-day, and 30-day active user counts).',
      },
      {
        label: 'The High-Throughput Bridge',
        description:
          'A custom data access layer utilizing Bulk Insertion techniques to move hundreds of thousands of granular activity records into SQL in seconds, rather than minutes.',
      },
    ],

    innovations: [
      {
        letter: 'A',
        title: 'Implementing Idempotent Synchronization',
        description:
          'To prevent data duplication during system retries, the engine was built with a "Clear-and-Sync" pattern. This ensures that if a synchronization job is triggered twice for the same date, the system automatically replaces the old data with the fresh set, maintaining 100% data integrity.',
      },
      {
        letter: 'B',
        title: 'The "First-Use" Retention Model',
        description:
          'A specialized cohort analysis was developed to track "Day 7 Retention." By isolating users on their first day of app interaction and tracking their return exactly 168 hours later, the engineering team provided the business with its first accurate "Stickiness" metric.',
      },
      {
        letter: 'C',
        title: 'Self-Documenting Infrastructure',
        description:
          'To ensure long-term maintainability, the system utilized a "Single Source of Truth" documentation strategy. Interfaces define the business contract, while implementations use inherited metadata, ensuring that as the platform evolves, the documentation never drifts from the actual logic.',
      },
    ],

    results: [
      {
        label: 'Data Reliability',
        description:
          'Eliminated "data gaps" caused by the legacy FTP system, reaching 99.9% reporting uptime.',
      },
      {
        label: 'Operational Efficiency',
        description:
          'Reduced the time from "User Action" to "BI Visibility" from 24+ hours to a consistent early-morning automated update.',
      },
      {
        label: 'Business Intelligence',
        description:
          'Provided stakeholders with a suite of new KPIs (WAU, Avg Session Duration, and Retention Rates) that were previously technically impossible to calculate.',
      },
    ],

    stackCategories: [
      { label: 'Orchestration', value: 'Serverless Cloud Functions' },
      { label: 'Source Data', value: 'Graph Database (Session & Interaction Models)' },
      { label: 'Target Data', value: 'Relational SQL Data Warehouse' },
      { label: 'Patterns', value: 'Bulk Copy (ETL), Repository Pattern, Interface-Driven Design, Async/Await Concurrency' },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
