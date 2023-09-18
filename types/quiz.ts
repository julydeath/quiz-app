export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Questions = {
  category: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  quections: string;
  type: string;
};

export type Questionsstate = Array<Questions & { answers: Array<string> }>;
