// Raw API response wrapper
export interface SkolverketApiResponse {
  subject: SkolverketSubjectResponse;
}

export interface SkolverketSubjectResponse {
  name: string;
  code: string;
  description?: string;
  purpose?: string;
  courses?: SkolverketCourse[];
  centralContents?: SkolverketCentralContent[];
  knowledgeRequirements?: SkolverketKnowledgeRequirement[];
}

export interface SkolverketCourse {
  name: string;
  code: string;
  points?: number;
  description?: string;
  centralContents?: SkolverketCentralContent[];
  knowledgeRequirements?: SkolverketKnowledgeRequirement[];
}

export interface SkolverketCentralContent {
  text: string;
  year?: string;
}

export interface SkolverketKnowledgeRequirement {
  text: string;
  year?: string;
}

export interface TransformedSubject {
  name: string;
  code: string;
  purpose: string;
  centralContents: {
    heading: string;
    items: string[];
    grades: string;
  }[];
  knowledgeRequirements: {
    grade: string;
    requirements: string[];
  }[];
}
