import React from 'react';
import styled from 'styled-components';

const QuestionCounter = ({ current, total }) => {
  return (
    <StyledWrapper>
      <div className="counter-card" id="counter-card">
        <div className="content">
          <span>{current}/{total}</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .counter-card {
    width: 80px; /* Square shape */
    height: 80px; /* Square shape */
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 3px 1px #00000088;
    cursor: pointer;
    border-radius: 10px; /* Slightly rounded corners */
    margin-right: -150px; /* Space between counter and progress bar */
    margin-left: 160px;
  }

  .counter-card .content {
    border-radius: 8px;
    background: #171717;
    width: 76px;
    height: 76px;
    z-index: 1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .content::before {
    opacity: 0;
    transition: opacity 300ms;
    content: " ";
    display: block;
    background: white;
    width: 3px;
    height: 30px;
    position: absolute;
    filter: blur(30px);
    overflow: hidden;
  }

  .counter-card:hover .content::before {
    opacity: 1;
  }

  .counter-card::before {
    opacity: 0;
    content: " ";
    position: absolute;
    display: block;
    width: 50px;
    height: 120px;
    background: #EC265F;
    transition: opacity 300ms;
    animation: rotation_9018 8000ms infinite linear;
    animation-play-state: paused;
  }

  .counter-card:hover::before {
    opacity: 1;
    animation-play-state: running;
  }

  .counter-card::after {
    position: absolute;
    content: " ";
    display: block;
    width: 120px;
    height: 120px;
    background: #17171733;
    backdrop-filter: blur(30px);
    border-radius: 8px;
  }

  @keyframes rotation_9018 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default QuestionCounter;