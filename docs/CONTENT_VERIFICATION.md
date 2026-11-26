# Content Verification — Shreyas Portfolio

## Verified sources

### GitHub profile (ShreyasOpeX)
Confirmed: name, education (RIT 2023–2027, B.E. CSE AI/ML), role at Hampi Labs,
LeetCode Knight / rating 1872 / 650+ problems, CodeRIT membership (listed as Junior Core Member
in README — superseded by resume which says Senior Core Member; resume used as authority).

### TradeSentry (distributed-aml-platform)
README fully inspected. Confirmed:
- Java 21, Spring Boot 4.1, Kafka (KRaft), gRPC, PostgreSQL, Docker Compose
- Transactional outbox, idempotent consumer inboxes, bounded StateGraph
- DeterministicRiskScorer (NOT an LLM), deterministic/synthetic case data
- HTTP Basic auth in reference implementation (NOT JWT as older resume states)
- Does not claim global exactly-once, real SAR filing, or LLM risk scoring
- Spring gRPC 1.0.3, Micrometer, OpenTelemetry

### MediSureAI
README fully inspected. Confirmed:
- Java 21, Spring Boot 3.4.3, Spring AI 1.0.0-M4
- PostgreSQL + pgvector (HNSW, cosine), MongoDB (text + chunks), RabbitMQ
- Ollama (local embeddings + inference), Groq (critique + formulary)
- Apache Tika + Apache POI, React 19 + Vite 7 + Tailwind CSS 4
- JWT access tokens + refresh-token rotation
- PATIENT, DOCTOR, ADMIN roles
- SRLM pipeline: multi-path → self-reflect → score → synthesise + citations
- Published at SYNERGY 2026 (IC-SIIT); forthcoming Scopus-indexed publication

### RouteX
README fully inspected. Confirmed:
- Java 21, Spring Boot 3.5.16, Kafka (Confluent Platform 7.9.0 / KRaft)
- ride-requested (3 partitions) → matching → driver-assigned → notification
- In-memory demo driver (explicitly stated)
- Manual ack, retry backoff, DLT, Kafka UI
- NOT a complete ride-sharing platform

### SentinelHub
README fully inspected. Confirmed:
- Java 21, Spring Boot 3.4.2, gRPC Java 1.68.2, Proto 3.25.5
- gateway-service → case-service → customer/history/collaboration/notification
- CaseService protobuf contract exists
- Kafka planned, not fully implemented
- Multi-service architecture is target design; some services are stubs

### PRISM (Prism-prism-)
README inspected. Confirmed:
- Python 3.10+, FastAPI, React frontend
- ReAct agent with tool selection (SRLM, Policy RAG, Web Search)
- ChromaDB (semantic), FAISS (vector), BM25 (keyword)
- mongomock-motor (in-memory MongoDB), AWS S3 sync
- Groq API (llama-3.3-70b-versatile), LangChain
- LICENSE: "proprietary and confidential"

### HelpLens (HelpCrisis)
Repository was not accessible during review. Information sourced from resume only.
Marked as partial implementation in project metadata.

## Discrepancies and decisions

| Item | Resume / Old source | Verified source | Decision |
|------|---------------------|-----------------|----------|
| GitHub username | (old name in resume) | ShreyasOpeX | Use ShreyasOpeX |
| CodeRIT role | Junior Core Member (GitHub README) | Senior Core Member (newer resume) | Use Senior Core Member |
| TradeSentry auth | JWT (older resume) | HTTP Basic (current source) | Use HTTP Basic per source code |
| Spring Boot version TradeSentry | — | 4.1 (README) | Use 4.1 |
| Spring Boot version MediSureAI | — | 3.4.3 (README) | Use 3.4.3 |
| LangGraph in TradeSentry | "LangGraph-backed" (GitHub profile) | Java StateGraph, LangGraph-inspired (README) | Clarified: Java StateGraph |
| MediSureAI publication | Scopus-indexed | Forthcoming, not yet indexed | "forthcoming, final indexing pending" |

## Not included / excluded

- Phone number: excluded per instructions
- Proprietary PRISM details: restricted to high-level description
- Internal Hampi Labs architecture: not disclosed
- Resume PDF: not automatically linked (file not confirmed available in public/)
- DOI or publication link for MediSureAI: not available
- Throughput/latency benchmarks: not invented

## Assumptions

- Education CGPA 8.60/10.0 taken from prompt as verified resume snapshot
- Hampi Labs internship February 2026 – Present taken from prompt
- Hackathon placements taken from prompt as verified
- TradeSentry "early development (0.1.0-SNAPSHOT)" per README
