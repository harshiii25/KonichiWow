import React from 'react';
import TiltedCard from './TiltedCard.jsx';
import './QuestionCardNew.css';

const QuestionCardNew = ({ 
  question, 
  options, 
  selectedAnswer, 
  onAnswerSelect, 
  showFeedback,
  correctAnswer,
  explanation 
}) => {
  
  const optionImages = {
    [options[0]]: '/images/t6.png',
    [options[1]]: '/images/t4.png', 
    [options[2]]: '/images/t5.png',
    [options[3]]: '/images/t7.png'
  };

  const getCardClass = (option) => {
    if (!showFeedback) {
      return selectedAnswer === option ? 'selected' : '';
    }
    
    if (option === correctAnswer) {
      return 'correct';
    } else if (option === selectedAnswer && selectedAnswer !== correctAnswer) {
      return 'incorrect';
    } else {
      return '';
    }
  };

  return (
    <div className="question-container">
      {/* Question Box */}
      <div className="question-box">
        <h2 className="question-text">{question}</h2>
      </div>

      {/* Options in 2x2 Grid */}
      <div className="options-grid">
        {options.map((option, index) => (
          <div 
            key={index} 
            className={`option-item ${getCardClass(option)}`}
            onClick={() => onAnswerSelect(option)}
          >
            <TiltedCard
              imageSrc={optionImages[option]}
              altText={`Option ${index + 1}`}
              captionText={option}
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              onClick={() => onAnswerSelect(option)}
              isSelected={selectedAnswer === option}
            />
            <div className="option-text">{option}</div>
          </div>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="feedback">
          {selectedAnswer === correctAnswer ? (
            <div className="feedback-correct">
              <span className="feedback-icon"></span>
              <span>Correct!</span>
            </div>
          ) : (
            <div className="feedback-incorrect">
              <span className="feedback-icon"></span>
              <span>Incorrect. The right answer is: <strong>{correctAnswer}</strong></span>
            </div>
          )}
          {explanation && (
            <div className="explanation">
              <p>{explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCardNew;