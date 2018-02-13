import { Word } from '../models/word';
import { Answer } from '../models/answer';
export interface Question {
    index: number;
    word: Word;
    sound?: string;
    correctAnswerIndex: number;
    answers: Answer[];
}
