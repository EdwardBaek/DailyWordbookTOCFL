import { Word } from '../models/Word';
import { Answer } from '../models/Answer';
export interface Question {
    index: number;
    word: string;
    sound?: string;
    correctAnswerIndex?: number;
    answers: Word[];
}
