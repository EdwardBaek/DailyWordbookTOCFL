import { Word } from '../models/Word';
import { Answer } from '../models/Answer';
export interface Question {
    index: number;
    questionWord : Word;
    answers: Word[];
}
