
export interface PerformanceMetric {
  name: string;
  score: number;
  rating: string;
  description: string;
}

export interface QuestionAnalysisData {
  questions: {
    question: string;
    answer: string;
    analysis: string;
  }[];
}

export interface Candidate {
  name: string;
  role: string;
  interviewDate: string;
  interviewDuration: string;
}

export interface ReportData {
  candidate: Candidate;
  overallScore: number;
  performanceMetrics: PerformanceMetric[];
  questionAnalysis: QuestionAnalysisData;
}
