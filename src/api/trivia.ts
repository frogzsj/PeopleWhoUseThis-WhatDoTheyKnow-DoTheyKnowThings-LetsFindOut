import axios from 'axios';
import shuffle from 'lodash/shuffle';
import { Category, Difficulty, idsByCategory, Question } from '../game-data';

interface QuestionResponse {
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export const getQuestion = async (
  category: string,
  difficulty: Difficulty
): Promise<Question | null> => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`
    );
    const result = response.data.results[0];
    console.log(result);
    return {
      ...result,
      options: shuffle([result.correct_answer, ...result.incorrect_answers]),
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
