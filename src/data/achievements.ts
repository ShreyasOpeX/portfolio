export interface Achievement {
  type: 'competitive' | 'research';
  title: string;
  detail: string;
  meta?: string;
}

export const achievements: Achievement[] = [
  // Competitive programming
  {
    type: 'competitive',
    title: 'LeetCode Knight',
    detail: 'Contest rating 1872 — 650+ DSA problems solved across LeetCode, Striver\'s Sheet and other platforms.',
  },
  // Research
  {
    type: 'research',
    title: 'MediSureAI: An Agentic RAG Platform for Healthcare & Insurance',
    detail: 'Presented at SYNERGY 2026 (IC-SIIT). Forthcoming publication in a Scopus-indexed journal through Taylor & Francis / CRC Press.',
    meta: 'Note: Final indexing is pending; no DOI or publication link is available yet.',
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    institution: 'Ramaiah Institute of Technology, Bengaluru',
    degree: 'B.E. Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
    duration: '2023 – 2027',
    cgpa: '8.60 / 10.0',
    coursework: [
      'Data Structures',
      'Object-Oriented Programming',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
      'Design and Analysis of Algorithms',
      'Computer Architecture',
      'Compiler Design',
    ],
  },
];

export interface LeadershipItem {
  role: string;
  organization: string;
  since: string;
  responsibilities: string[];
}

export const leadership: LeadershipItem[] = [
  {
    role: 'Senior Core Member',
    organization: 'CodeRIT — Official Coding Club, Ramaiah Institute of Technology',
    since: 'June 2025',
    responsibilities: [
      'Organizing technical events and coding contests.',
      'Managing an inter-college 24-hour national-level hackathon.',
      'Coordinating logistics, problem statements and judging.',
    ],
  },
];
