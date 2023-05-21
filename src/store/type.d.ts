export interface LoginResponse {
  success: boolean;
  message: string;
}

export interface SignUpResponse {
  success: boolean;
  message: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
}

export interface Answer {
  questionId: string;
  answer: string;
}

export interface Question {
  title: string;
  type: string;
  isOptional: boolean;
  maxAnswerLength: number;
  minChoices: number;
  maxChoices: number;
  options: string[];
  surveyId: string;
}

export interface Survey {
  title: string;
  description: string;
  isPublished: boolean;
  estimatedTime: number;
  users: string[];
  questions: string[];
  submittedAt: Date;
}

export interface Answer {
  questionId: string;
  answer: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
