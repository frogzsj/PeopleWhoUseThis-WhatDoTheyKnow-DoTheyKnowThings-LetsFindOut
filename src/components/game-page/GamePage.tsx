import React from 'react';
import shuffle from 'lodash/shuffle';
import { StoreContext, setIsGameActive, setCurrentQuestion } from '../../store';
import { Difficulty } from '../../game-data';
import { getQuestion } from '../../api/trivia';
import './GamePage.scss';

function GamePage(): React.ReactElement | null {
  const { store, dispatch } = React.useContext(StoreContext);
  const [currentSelectedOption, setCurrentSelectedOptions] = React.useState<
    number | null
  >(null);

  React.useEffect(() => {
    const getNewQuestion = async (): Promise<void> => {
      try {
        const response = await getQuestion('', 'easy' as Difficulty);
        dispatch(setCurrentQuestion(response));
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };

    if (store.currentQuestion == null) {
      if (store.strikes > 5) {
        dispatch(setIsGameActive(false));
      }

      getNewQuestion();
    }
  }, [store.currentQuestion, store.strikes, dispatch]);

  const questionText =
    store.currentQuestion == null
      ? 'Loading...'
      : store.currentQuestion.question.replace(/&quot;/g, '"');

  const options =
    store.currentQuestion == null ? [] : store.currentQuestion.options;

  return (
    <div className="GamePage-wrapper">
      <div className="GamePage-question-wrapper">{questionText}</div>
      <div className="GamePage-options-wrapper">
        <div className="GamePage-options-row">
          <div className="GamePage-option">{options[0]}</div>
          <div className="GamePage-option">{options[1]}</div>
        </div>
        <div className="GamePage-options-row">
          <div className="GamePage-option">{options[2]}</div>
          <div className="GamePage-option">{options[3]}</div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
