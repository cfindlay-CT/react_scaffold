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
  {
    id: 'cs-2',
    slug: 'test-architecture-optimization',
    title: 'Scalable Test Architecture & Service Optimization',
    subtitle: 'Modernizing a Legacy Backend Testing Suite and Refining Core Business Logic for Reliability at Scale',
    company: null,
    period: '',
    type: 'professional',
    tags: ['Test Engineering', 'Backend Development', 'DevOps', 'Data Architecture'],
    summary:
      'Overhauled a legacy backend testing suite by introducing fixture-based isolation patterns and optimizing core service logic — eliminating flaky tests, improving data integrity, and establishing a scalable blueprint for future development.',

    executiveSummary:
      'This project involved a comprehensive modernization of a legacy backend testing suite and the refinement of core business logic. By transitioning to a standardized, fixture-based testing architecture and optimizing data processing services, the system achieved higher reliability, eliminated cross-test interference, and streamlined data extraction for reporting and analytics.',

    challengeTitle: 'The Instability Problem',
    challengeIntro:
      'The existing test suite suffered from chronic instability rooted in shared state and inconsistent configuration. Three compounding issues made the system unreliable and costly to maintain:',
    challengePoints: [
      {
        label: 'State Leakage',
        description:
          'Tests shared mutable state across runs, causing intermittent failures that were difficult to reproduce and trace — classic "flaky test" behavior that eroded team confidence in the suite.',
      },
      {
        label: 'Inconsistent Environments',
        description:
          'The test runner lacked cross-platform support, producing different results across developer machines and CI/CD pipelines and blocking reliable continuous integration.',
      },
      {
        label: 'Data Integrity Gaps',
        description:
          'Core service logic returned inaccurate data due to missing filtering and insufficient edge-case coverage, exposing end-users and reporting systems to stale or invalid records.',
      },
    ],

    architectureSubtitle: 'A Fixture-First Architecture',
    architectureIntro:
      'The solution centered on a fixture-based testing architecture that enforced clean isolation at every layer, paired with targeted service-layer optimizations to close data integrity gaps.',
    architectureComponents: [
      {
        label: 'Centralized State Management',
        description:
          'Specialized fixtures were developed to own dependency injection and mock configurations, providing a single authoritative setup path shared across the entire test suite.',
      },
      {
        label: 'Isolation Patterns',
        description:
          'Every test case was refactored to operate in a clean, idempotent environment. Teardown hooks and scoped fixtures ensured no test could pollute the state of any subsequent run.',
      },
      {
        label: 'Cross-Platform Orchestration',
        description:
          'The test runner configuration was redesigned to execute consistently across developer environments and CI/CD pipelines, eliminating environment-specific failures.',
      },
    ],

    innovations: [
      {
        letter: 'A',
        title: 'Conditional Filtering for Data Hygiene',
        description:
          'Advanced filtering logic was implemented at the service layer to ensure only relevant, active records flow through the application. This addressed upstream data quality issues that had been silently corrupting downstream reports.',
      },
      {
        letter: 'B',
        title: 'High-Performance Data Extraction',
        description:
          'Complex queries against both graph and relational databases were rewritten to reduce execution time and resource consumption, enabling efficient extraction of active user metrics and engagement statistics for KPI tracking.',
      },
      {
        letter: 'C',
        title: 'Comprehensive Edge-Case Coverage',
        description:
          'Systematic test coverage was added for edge cases involving complex user roles and permissions — scenarios that previously lacked any verification, leaving the system vulnerable to regressions during feature expansion.',
      },
    ],

    results: [
      {
        label: 'Architectural Stability',
        description:
          'Established a scalable blueprint for all future unit and integration tests, reducing the time required to write and debug new tests across the engineering team.',
      },
      {
        label: 'Enhanced Reliability',
        description:
          'Eliminated test pollution entirely, resulting in a predictable and trustworthy testing suite that the team could act on with confidence.',
      },
      {
        label: 'Performance Gains',
        description:
          'Improved the response time of background data processing tasks and reporting functions by optimizing multi-database query paths.',
      },
      {
        label: 'Clean Data Model',
        description:
          'Simplified internal data relationships by deprecating legacy structures, producing a more maintainable codebase and cleaner data flowing to reporting systems.',
      },
    ],

    stackCategories: [
      { label: 'Test Engineering', value: 'Fixture Patterns, Mock State Isolation, Idempotent Test Design' },
      { label: 'Backend Development', value: 'Service-Layer Optimization, Role & Permission Logic, Conditional Filtering' },
      { label: 'DevOps & Tooling', value: 'Cross-Platform Test Runners, CI/CD Orchestration Scripts' },
      { label: 'Data Architecture', value: 'Graph Database Queries, Relational SQL Optimization, Metric Aggregation' },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
