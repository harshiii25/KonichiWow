import React from 'react';
import AnimatedCircularProgressBar from './AnimatedCircularProgressBar.jsx';
import SpotlightCard from './SpotlightCard.jsx';
import './ResultsNew.css';

const ResultsNew = ({ score, totalQuestions, questions, userAnswers, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 90) return "Awesome!";
    if (percentage >= 70) return "Hurrayy!";
    if (percentage >= 50) return "Greattt!";
    return "Practice!";
  };

  const getScoreColor = () => {
    if (percentage >= 90) return "#26ECB4";
    if (percentage >= 70) return "#4CAF50";
    if (percentage >= 50) return "#FF9800";
    return "#EC265F";
  };

  const getSpotlightColor = (index) => {
    const isCorrect = userAnswers[index] === questions[index].correctAnswer;
    return isCorrect ? 'rgba(38, 236, 180, 0.2)' : 'rgba(236, 38, 95, 0.2)';
  };

  const getBorderColor = (index) => {
    const isCorrect = userAnswers[index] === questions[index].correctAnswer;
    return isCorrect ? '#26ECB4' : '#EC265F';
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="results-new-container">
      {}
      <div className="home-icon-container" onClick={handleHomeClick}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=home" />
        <span className="material-symbols-outlined home-icon">
          home
        </span>
      </div>

      {/* Header Section */}
      <div className="results-header">
        <h1 className="results-title">Quiz Complete!</h1>
      </div>

      {/* Main Score Section */}
      <div className="score-section">
        <div className="score-visual">
          <AnimatedCircularProgressBar
            value={percentage}
            size={200}
            strokeWidth={15}
            gaugePrimaryColor={getScoreColor()}
            gaugeSecondaryColor="rgba(255, 255, 255, 0.2)"
          />
          <div className="score-text">
            <div className="score-fraction">
              {score}<span className="score-divider">/</span>{totalQuestions}
            </div>
            <div className="score-message" style={{ color: 'white' }}>
              {getScoreMessage()}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn-restart" onClick={onRestart}>
          <span>Take Quiz Again</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Review Section - 3×2 Grid */}
      <div className="review-section">
        <h3 className="review-title">Review Your Answers</h3>
        <div className="review-grid">
          {questions.map((question, index) => (
            <SpotlightCard
              key={index}
              className={`review-card ${userAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect'}`}
              spotlightColor={getSpotlightColor(index)}
              style={{ borderColor: getBorderColor(index) }}
            >
              <div className="review-card-content">
                <div className="question-header">
                  <span className="question-number">Q{index + 1}</span>
                  <span className={`status ${userAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                    {userAnswers[index] === question.correctAnswer ? '✓' : '✗'}
                  </span>
                </div>
                
                <div className="question-text">
                  {question.question}
                </div>

                <div className="answer-section">
                  <div className="user-answer">
                    <strong>Your answer:</strong> {userAnswers[index] || 'Not answered'}
                  </div>
                  
                  {userAnswers[index] !== question.correctAnswer && (
                    <div className="correct-answer">
                      <strong>Correct:</strong> {question.correctAnswer}
                    </div>
                  )}
                </div>

                {question.explanation && (
                  <div className="explanation">
                    <strong>💡</strong> {question.explanation}
                  </div>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsNew;