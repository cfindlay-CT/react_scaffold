export const resumeData = {
  name: 'Clinton Findlay',
  title: 'Senior Software Engineer',
  subtitle: '',
  location: 'Eagle Mountain, UT',
  email: 'cfindlay@comtopllc.com',
  phone: '801-588-9564',
  summary:
    'Senior Full-Stack Engineer with over 13 years of experience architecting and scaling enterprise-grade applications. Expert in the TypeScript ecosystem with a deep focus on Angular and Node.js backend services. Proven track record of leading architectural migrations that improved system uptime by 25% and reduced data retrieval times by 40%. Highly proficient in AI-augmented development workflows using Cursor and GitHub Copilot.',

  experience: [
    {
      id: 'exp-1',
      title: 'Lead Software Developer',
      company: 'LifeVantage',
      period: 'May 2021 – Present',
      description:
        'Architected and deployed a multi-tier Azure cloud solution using TypeScript and .NET Core for 100K+ global users, achieving a 25% increase in API uptime and a 15% reduction in mobile app crash rates. Spearheaded AI-augmented development by integrating Cursor and GitHub Copilot, reducing boilerplate generation time by 40%. Led backend architecture and code reviews for high-concurrency Node.js and Azure services, mentoring a team of 5+ engineers. Managed Azure functions and event grids for scalable processing.',
    },
    {
      id: 'exp-2',
      title: 'Senior Software Developer',
      company: 'Jeunesse Global',
      period: 'May 2018 – May 2021',
      description:
        'Optimized a global e-commerce platform serving millions of monthly active users by refactoring frontend components in Angular and TypeScript. Reduced data retrieval times by 40% through strategic optimization of SQL Server queries and schema redesigns. Designed and shipped end-to-end features including real-time dashboards and payment integrations. Assisted in website architecture and server configuration.',
    },
    {
      id: 'exp-3',
      title: 'Software Developer',
      company: 'Manager Plus',
      period: 'Mar 2016 – May 2018',
      description:
        'Modernized legacy monolithic systems by migrating to a decoupled Angular and Web API architecture, increasing long-term system maintainability. Built high-performance UI dashboards using TypeScript and DevExtreme, tailored for enterprise-level data visualization and reporting. Developed and maintained business-critical applications with ASP.NET and SQL Server.',
    },
    {
      id: 'exp-4',
      title: 'Software Analyst',
      company: 'Best Friends Animal Society',
      period: 'Sep 2013 – Oct 2015',
      description:
        'Enhanced CRM systems and maintained WCF services for third-party integrations, ensuring 99.9% data accuracy for donor processing. Developed BI tools to validate and process massive datasets, improving organizational insight into donor behavior. Developed enhancements to Blackbaud CRM, improving business workflows.',
    },
    {
      id: 'exp-5',
      title: 'Software Developer',
      company: 'DHI – GoldPoint Systems',
      period: '',
      description:
        'Developed SQL backend processes for financial data management. Migrated Windows Forms applications to modern hosting environments.',
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science in Computer Science',
      school: 'Neumont University',
      period: '',
    },
  ],

  skills: [
    // Languages
    'TypeScript', 'JavaScript (ES6+)', 'C#', 'Java', 'Python', 'SQL', 'SCSS', 'HTML5',
    // Front-end
    'Angular (v2–17)', 'AngularJS', 'React', 'RxJS', 'NgRx / Redux', 'Responsive UI/UX',
    // Back-end
    'Node.js', 'Express', 'RESTful APIs', 'GraphQL', '.NET 6/7', 'ASP.NET MVC', 'Web API',
    'Microservices', 'Entity Framework', 'Hibernate', 'WCF', 'LINQ',
    // Cloud & DevOps
    'Azure', 'Azure Functions', 'Azure Event Grid', 'GitHub Actions', 'Docker', 'CI/CD',
    'Nginx',
    // Databases
    'SQL Server', 'PostgreSQL', 'MongoDB', 'Neo4J',
    // Tools & Platforms
    'DevExpress', 'Git', 'Visual Studio', 'SharePoint', 'Unix/Linux',
    // AI Tools
    'Cursor', 'GitHub Copilot',
  ],

  projects: [
    // --- Professional Projects ---
    // {
    //   id: 'proj-1',
    //   title: 'AI-Enhanced API Scaffolding',
    //   company: 'LifeVantage',
    //   type: 'professional',
    //   description:
    //     'Developed a toolkit using Cursor\'s multi-file context to automate the creation of Node.js API endpoints, saving approximately 10 hours per sprint.',
    // },
    {
      id: 'proj-2',
      title: 'Distributed Event Engine',
      company: 'LifeVantage',
      type: 'professional',
      description:
        'Built an event-driven orchestrator using Node.js and Azure Event Grid to process real-time transaction data for 100K+ concurrent users.',
    },
    {
      id: 'proj-3',
      title: 'Multi-Tier Azure Cloud Migration',
      company: 'LifeVantage',
      type: 'professional',
      description:
        'Led the architecture and deployment of a multi-tier Azure cloud solution in TypeScript and .NET Core, serving 100K+ global users. Achieved a 25% increase in API uptime and a 15% reduction in mobile app crash rates.',
    },
    {
      id: 'proj-4',
      title: 'Global E-Commerce Platform Optimization',
      company: 'Jeunesse Global',
      type: 'professional',
      description:
        'Refactored frontend components in Angular and TypeScript for a platform serving millions of monthly active users. Reduced data retrieval times by 40% through SQL Server query optimization and schema redesigns. Shipped real-time dashboards and payment integrations end-to-end.',
    },
    {
      id: 'proj-5',
      title: 'Legacy Monolith to Angular Migration',
      company: 'Manager Plus',
      type: 'professional',
      description:
        'Modernized a legacy monolithic system by migrating to a decoupled Angular 2+ and Web API architecture. Built enterprise-level data visualization dashboards using TypeScript and DevExtreme.',
    },
    {
      id: 'proj-6',
      title: 'Blackbaud CRM Enhancements & Donor BI Tools',
      company: 'Best Friends Animal Society',
      type: 'professional',
      description:
        'Extended Blackbaud CRM with custom enhancements and maintained WCF services for third-party data integrations. Built BI tools to validate and process large donor datasets, improving accuracy to 99.9% and surfacing actionable organizational insights.',
    },
    // --- Side Projects ---
    {
      id: 'proj-7',
      title: 'Python Web Service',
      company: null,
      type: 'personal',
      description:
        'Building a RESTful web service in Python as a hands-on approach to learning the language. Exploring Python\'s ecosystem for backend development including routing, data handling, and API design patterns.',
    },
    {
      id: 'proj-8',
      title: 'Personal Resume Application',
      company: null,
      type: 'personal',
      description:
        'Designed and built this interactive resume application in React, using it as a sandbox to sharpen modern React skills including component architecture, hooks, and state management outside of the Angular ecosystem.',
    },
  ],

  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/clinton-findlay' },
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'Email', url: 'mailto:cfindlay@comtopllc.com' },
  ],

  qualifications: [
    'Extensive experience in web application development and system architecture',
    'Strong expertise in Java, JavaScript, C#, and SQL',
    'Experience with web server and application server configuration, including Nginx',
    'Extensive experience with object-oriented design and development',
    'Strong analytical and problem-solving skills with a systematic approach to troubleshooting',
    'Effective communicator and mentor for development teams',
  ],
}