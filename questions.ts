export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the derivative of x²?",
    options: ["2x", "x", "x²", "1"],
    answer: 0,
  },
  {
    id: 2,
    question: "Unit of Force?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    answer: 1,
  },
  {
    id: 3,
    question: "H2O is?",
    options: ["Hydrogen", "Oxygen", "Water", "Salt"],
    answer: 2,
  },
];
