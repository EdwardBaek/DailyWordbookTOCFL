import { Word } from '../models/Word';
import { Answer } from '../models/Answer';
export interface Question {
    index: number;
    selectedWordIndex?: number;
    isAnswerCorrect?: boolean;
    questionWord : Word;
    answers: Word[];
}
