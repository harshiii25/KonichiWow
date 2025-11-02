import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultsNew from '../components/ResultsNew.jsx';
import './ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, questions, userAnswers } = location.state || {};

  const handleRestart = () => {
    navigate('/quiz');
  };

  if (!location.state) {
    return (
      <div className="error-state">
        <h2>No quiz results found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="results-page">
      <ResultsNew
        score={score}
        totalQuestions={totalQuestions}
        questions={questions}
        userAnswers={userAnswers}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default ResultsPage;