import React from 'react';
import './QuizNavigation.css';

const QuizNavigation = ({ 
  onNext, 
  onPrevious, 
  onFinish, 
  currentQuestion, 
  totalQuestions,
  isLastQuestion,
  isAnswerSelected 
}) => {
  return (
    <div className="quiz-navigation">
      <button 
        className="btn-secondary" 
        onClick={onPrevious}
        disabled={currentQuestion === 0}
      >
        Previous
      </button>
      
      {isLastQuestion ? (
        <button 
          className="btn-primary" 
          onClick={onFinish}
          disabled={!isAnswerSelected}
        >
          Finish Quiz
        </button>
      ) : (
        <button 
          className="btn-primary" 
          onClick={onNext}
          disabled={!isAnswerSelected}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizNavigation;