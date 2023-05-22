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
  _id: string;
  title: string;
  description: string;
  isPublished: boolean;
  estimatedTime: number;
  users: string[];
  questions: string[];
  submittedAt: Date;
  updatedAt: string;
  createdAt: string;
}

export interface Answer {
  questionId: string;
  answer: string;
}

export interface IGenericResponse {
  success: boolean;
  message: string;
}

export interface User {
  name: string;
  email: string;
  _id: string;
  id: string;
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface SurveyResponse {
  success: boolean;
  count: number;
  data: Survey[];
}
