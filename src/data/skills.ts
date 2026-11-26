export interface SkillGroup {
  domain: string;
  level: 'core' | 'applied' | 'exposure' | 'learning';
  levelLabel: string;
  skills: string[];
  projectLinks?: string[]; // slugs
}

export const skillGroups: SkillGroup[] = [
  {
    domain: 'Core Languages',
    level: 'core',
    levelLabel: 'Primary',
    skills: ['Java', 'Python', 'C', 'JavaScript / TypeScript'],
  },
  {
    domain: 'Backend Engineering',
    level: 'core',
    levelLabel: 'Primary',
    skills: [
      'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring AI',
      'REST APIs', 'gRPC', 'JWT', 'Liquibase', 'AOP',
    ],
    projectLinks: ['tradesentry', 'medsureai', 'sentinelhub'],
  },
  {
    domain: 'Distributed Systems',
    level: 'core',
    levelLabel: 'Primary',
    skills: [
      'Apache Kafka', 'RabbitMQ',
      'Event-driven architecture', 'Transactional outbox',
      'Idempotent consumers', 'At-least-once delivery',
      'Partitioning', 'Consumer groups',
      'Dead-letter topics', 'Backpressure',
    ],
    projectLinks: ['tradesentry', 'routex', 'medsureai'],
  },
  {
    domain: 'Data Systems',
    level: 'core',
    levelLabel: 'Primary',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'pgvector'],
    projectLinks: ['tradesentry', 'medsureai'],
  },
  {
    domain: 'AI Engineering',
    level: 'applied',
    levelLabel: 'Applied',
    skills: [
      'Spring AI', 'LangChain', 'LangGraph',
      'RAG pipelines', 'SRLM',
      'Embeddings', 'Vector databases', 'Ollama', 'Groq',
      'Hybrid retrieval', 'Tool calling',
      'Agent orchestration', 'Reranking',
    ],
    projectLinks: ['medsureai', 'prism'],
  },
  {
    domain: 'Infrastructure',
    level: 'applied',
    levelLabel: 'Applied',
    skills: ['Docker', 'Docker Compose', 'AWS S3', 'AWS EC2', 'Railway', 'Git / GitHub'],
  },
  {
    domain: 'Additional Exposure',
    level: 'exposure',
    levelLabel: 'Exposure',
    skills: ['Redis', 'Neo4j', 'Cassandra', 'HBase', 'Hive'],
  },
  {
    domain: 'Currently Exploring',
    level: 'learning',
    levelLabel: 'Learning',
    skills: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
  },
];
