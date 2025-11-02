import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar.jsx';
import QuestionCardNew from '../components/QuestionCardNew.jsx';
import QuizNavigation from '../components/QuizNavigation.jsx';
import QuestionCounter from '../components/QuestionCounter.jsx';
import questionsData from '../data/questions.json';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset state when component mounts
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    
    // Simulate API call
    setQuestions(questionsData.questions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowFeedback(false);
    }
  };

  const handleFinish = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    navigate('/results', { 
      state: { 
        score, 
        totalQuestions: questions.length,
        questions,
        userAnswers: selectedAnswers 
      } 
    });
  };

  const handleQuestionSelect = (questionIndex) => {
    if (questionIndex >= 0 && questionIndex < questions.length) {
      setCurrentQuestionIndex(questionIndex);
      setShowFeedback(false);
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <div className="loading">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      {/* Home Icon */}
      <div className="home-icon-container" onClick={handleHomeClick}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=home" />
        <span className="material-symbols-outlined home-icon">
          home
        </span>
      </div>

      <div className="quiz-container">
        <div className="quiz-header">
          <div className="header-content">
            <QuestionCounter 
              current={currentQuestionIndex + 1} 
              total={questions.length} 
            />
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={questions.length} 
              onQuestionSelect={handleQuestionSelect}
              selectedAnswers={selectedAnswers}
            />
          </div>
        </div>

        <QuestionCardNew
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
          showFeedback={showFeedback}
          correctAnswer={currentQuestion.correctAnswer}
          explanation={currentQuestion.explanation}
        />

        {showFeedback && (
          <QuizNavigation
            onNext={handleNext}
            onPrevious={handlePrevious}
            onFinish={handleFinish}
            currentQuestion={currentQuestionIndex}
            totalQuestions={questions.length}
            isLastQuestion={isLastQuestion}
            isAnswerSelected={!!selectedAnswers[currentQuestionIndex]}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;