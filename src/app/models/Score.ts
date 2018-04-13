import { Word } from './Word';

export interface Score {
  score: number,
  totalWords:  number,
  level: number,
  date: Date,
  correctAnsweredWords : Word [],
  incorrectAnsweredWords : Word []
}