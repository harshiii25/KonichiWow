import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total, onQuestionSelect, selectedAnswers }) => {
  const elSet = total; 

  const handleQuestionClick = (questionIndex) => {
    if (onQuestionSelect && questionIndex < total) {
      onQuestionSelect(questionIndex);
    }
  };

  
  const isQuestionCompleted = (questionIndex) => {
    return selectedAnswers && selectedAnswers[questionIndex] !== undefined;
  };

  return (
    <div className="bar">
      {Array.from({ length: elSet }, (_, n) => (
        <React.Fragment key={n}>
          <input
            className="bar-input"
            type="radio"
            name="input"
            id={`input_${n}`}
            checked={current - 1 === n}
            readOnly
          />
          <div className={`bar-view ${isQuestionCompleted(n) ? 'completed' : ''} ${current - 1 === n ? 'current' : ''}`}>
            <label
              className="bar-button"
              htmlFor={`input_${n}`}
              onClick={() => handleQuestionClick(n)}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;