export type ImplementationStatus = 'implemented' | 'partial' | 'planned' | 'experimental';

export interface ProjectMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  categoryLabel: string;
  technologies: string[];
  featured: boolean;
  implementationStatus: ImplementationStatus;
  repositoryUrl: string;
  repositoryLinkEnabled: boolean;
  architecture: string;
  engineeringHighlights: string[];
  sortOrder: number;
}

export const projects: ProjectMeta[] = [
  {
    slug: 'tradesentry',
    title: 'TradeSentry',
    subtitle: 'Event-driven AML Transaction Monitoring',
    description:
      'An event-driven anti-money-laundering transaction monitoring reference platform that screens incoming transactions, investigates suspicious activity and produces auditable adjudication decisions using a bounded Java StateGraph.',
    category: 'Distributed Systems / Financial Technology',
    categoryLabel: 'Distributed Systems',
    technologies: ['Java 21', 'Spring Boot 4.1', 'Apache Kafka', 'gRPC', 'Protocol Buffers', 'PostgreSQL', 'Docker Compose', 'Spring Security', 'Micrometer'],
    featured: true,
    implementationStatus: 'implemented',
    repositoryUrl: 'https://github.com/ShreyasOpeX/distributed-aml-platform',
    repositoryLinkEnabled: true,
    architecture: 'transactional-outbox-kafka-grpc',
    engineeringHighlights: [
      'Transactional outbox for database-to-Kafka reliability',
      'At-least-once delivery with idempotent consumer inboxes',
      'Partitioning by accountId for per-account ordering',
      'Bounded Java StateGraph for deterministic investigation workflow',
      'Strategy-based deterministic risk scoring',
      'gRPC with explicit deadlines for synchronous case-data reads',
      'Independent audit consumer group for separation of concerns',
      'Versioned screening, scoring and decision policies',
    ],
    sortOrder: 1,
  },
  {
    slug: 'medsureai',
    title: 'MediSureAI',
    subtitle: 'Self-reflective Agentic RAG Platform',
    description:
      'A healthcare and insurance decision-support platform combining document retrieval, agentic orchestration and a self-reflective reasoning pipeline to produce grounded, citation-backed responses.',
    category: 'AI Engineering / Healthcare & Insurance',
    categoryLabel: 'AI Engineering',
    technologies: ['Java 21', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'MongoDB', 'RabbitMQ', 'Apache Tika', 'Ollama', 'Groq', 'React'],
    featured: true,
    implementationStatus: 'implemented',
    repositoryUrl: 'https://github.com/ShreyasOpeX/MediSureAI',
    repositoryLinkEnabled: true,
    architecture: 'rag-srlm-pipeline',
    engineeringHighlights: [
      'Self-Reflective Language Model (SRLM) reasoning pipeline',
      'Hybrid semantic + keyword retrieval with cross-encoder reranking',
      'Asynchronous document ingestion via RabbitMQ',
      'pgvector HNSW indexing for cosine-similarity search',
      'Dual LLM setup: local Ollama + Groq cloud critique',
      'JWT authentication with refresh-token rotation',
      'Role-based access: PATIENT, DOCTOR, ADMIN',
      'Confidence calibration and guardrails',
    ],
    sortOrder: 2,
  },
  {
    slug: 'prism',
    title: 'PRISM',
    subtitle: 'Policy Retrieval & Intelligence System Manager',
    description:
      'An AI-powered policy document retrieval system combining a custom ReAct agent, multiple retrieval engines (SRLM, Policy RAG, web search) and cloud-backed persistence for precise, context-aware answers from complex document libraries.',
    category: 'Document Intelligence / Agentic AI',
    categoryLabel: 'Agentic AI',
    technologies: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'FAISS', 'BM25', 'AWS S3', 'Groq', 'React'],
    featured: false,
    implementationStatus: 'implemented',
    repositoryUrl: 'https://github.com/ShreyasOpeX/Prism-prism-',
    repositoryLinkEnabled: false, // Proprietary — link disabled pending approval
    architecture: 'react-agent-hybrid-retrieval',
    engineeringHighlights: [
      'Custom ReAct agent with tool selection across retrieval engines',
      'Hybrid retrieval: ChromaDB semantic + FAISS vector + BM25 keyword',
      'Cross-encoder reranking for precision',
      'AWS S3 synchronization for zero-cost persistence',
      'Multi-source synthesis across internal docs and web',
    ],
    sortOrder: 3,
  },
  {
    slug: 'helplens',
    title: 'HelpLens',
    subtitle: 'AI-Powered Crisis Response Platform',
    description:
      'A Spring Boot backend with a Spring AI assistant that processes natural-language queries about crisis resources — shelters, hospitals and blocked routes — with misinformation filtering and role-based access for citizens, NGOs and administrators.',
    category: 'Social Impact / AI Engineering',
    categoryLabel: 'Social Impact',
    technologies: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'JWT', 'Spring Security'],
    featured: false,
    implementationStatus: 'partial',
    repositoryUrl: 'https://github.com/ShreyasOpeX/HelpCrisis',
    repositoryLinkEnabled: true,
    architecture: 'spring-ai-assistant',
    engineeringHighlights: [
      'Natural-language crisis information queries via Spring AI',
      'Misinformation filtering for crisis data',
      'Role-based access: citizen, NGO, administrator',
      'Hyperlocal crisis updates',
    ],
    sortOrder: 4,
  },
  {
    slug: 'routex',
    title: 'RouteX',
    subtitle: 'Event-driven Ride Dispatch',
    description:
      'A Kafka engineering laboratory demonstrating event-driven ride dispatch: topics, partitions, consumer group isolation, manual acknowledgement, retry backoff, dead-letter recovery and observability.',
    category: 'Kafka Engineering Laboratory',
    categoryLabel: 'Kafka Lab',
    technologies: ['Java 21', 'Spring Boot', 'Spring Kafka', 'Apache Kafka (KRaft)', 'Docker Compose', 'Kafka UI'],
    featured: false,
    implementationStatus: 'implemented',
    repositoryUrl: 'https://github.com/ShreyasOpeX/RouteX',
    repositoryLinkEnabled: true,
    architecture: 'kafka-event-pipeline',
    engineeringHighlights: [
      'HTTP ride request → Kafka → driver matching → notification pipeline',
      'Records keyed by rideId for per-ride ordering',
      'Three matching listener containers with consumer concurrency',
      'Manual acknowledgement after successful listener work',
      'Fixed retry backoff with dead-letter-topic recovery',
      'Kafka UI and Actuator observability',
    ],
    sortOrder: 5,
  },
  {
    slug: 'sentinelhub',
    title: 'SentinelHub',
    subtitle: 'Incident Investigation Architecture',
    description:
      'A gRPC engineering reference platform exploring how an incident investigation system combines REST at the external API boundary, gRPC for internal service communication and Kafka for asynchronous business events.',
    category: 'gRPC Engineering Laboratory',
    categoryLabel: 'gRPC Lab',
    technologies: ['Java 21', 'Spring Boot', 'gRPC', 'Protocol Buffers', 'Maven multi-module', 'Apache Kafka (planned)'],
    featured: false,
    implementationStatus: 'partial',
    repositoryUrl: 'https://github.com/ShreyasOpeX/SentinelHub',
    repositoryLinkEnabled: true,
    architecture: 'rest-grpc-kafka-hybrid',
    engineeringHighlights: [
      'Contract-first service communication via Protocol Buffers',
      'REST-to-gRPC adaptation at the gateway',
      'Unary RPC, server streaming, client streaming and bidirectional streaming',
      'Deadlines, interceptors and metadata propagation',
      'Backward-compatible protobuf schema evolution',
    ],
    sortOrder: 6,
  },
];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter(p => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLaboratoryProjects(): ProjectMeta[] {
  return projects.filter(p => !p.featured).sort((a, b) => a.sortOrder - b.sortOrder);
}
