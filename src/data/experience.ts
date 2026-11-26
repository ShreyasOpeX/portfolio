export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  project: string;
  summary: string;
  highlights: { title: string; description: string }[];
  technologies: string[];
  metrics: { value: string; label: string }[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Hampi Labs',
    role: 'Software Engineer Intern',
    duration: 'February 2026 – June 2026',
    project: 'Multi-tenant Hotel Management System',
    summary:
      'Building the backend for a multi-tenant hotel management system serving multiple hotel properties from a single deployment. The work covers authorization architecture, booking integrity, schema evolution and cloud infrastructure.',
    highlights: [
      {
        title: 'Multi-tenancy and Authorization',
        description:
          'Built a Spring Boot 4.0 backend with role-based authorization implemented via AOP, ensuring tenant isolation and controlled resource access. Integrated JWT authentication with token rotation for stateless, secure session management.',
      },
      {
        title: 'Booking Consistency and Database Integrity',
        description:
          'Designed the booking lifecycle across 20+ PostgreSQL tables. Used a UNIQUE(room_id, date) database constraint to prevent double bookings at the data layer, eliminating race conditions independently of application-level logic.',
      },
      {
        title: 'Deployment and Infrastructure',
        description:
          'Managed database schema evolution with 49 Liquibase changesets for reproducible migrations. Integrated AWS S3 for file storage, containerized the backend with Docker and deployed through Railway. Documented the API with Swagger UI.',
      },
    ],
    technologies: [
      'Spring Boot 4.0',
      'Java',
      'PostgreSQL',
      'Liquibase',
      'JWT',
      'AOP',
      'AWS S3',
      'Docker',
      'Railway',
      'Swagger UI',
    ],
    metrics: [
      { value: '20+', label: 'PostgreSQL tables' },
      { value: '49', label: 'Liquibase changesets' },
    ],
  },
];
