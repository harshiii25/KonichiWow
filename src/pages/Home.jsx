import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shuffle from '../components/Shuffle.jsx';
import CircularGallery from '../components/CircularGallery.jsx';
import ScrollFloat from '../components/ScrollFloat.jsx';
import AnimatedButton from '../components/AnimatedButton.jsx';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  const startQuizFromButton = () => {
    navigate('/quiz');
  };

  const galleryItems = [
    { image: '/images/t1.png', text: 'Image 1' },
    { image: '/images/t2.png', text: 'Image 2' },
    { image: '/images/t4.png', text: 'Image 4' },
    { image: '/images/t5.png', text: 'Image 5' },
    { image: '/images/t6.png', text: 'Image 6' },
    { image: '/images/t7.png', text: 'Image 7' },
  ];

  return (
    <div className="home-page">
      {/* Top Section */}
      <div className="home-container" onClick={startQuiz}>
        <div className="content-overlay">
          <div className="hand-container">
            <img 
              src="/images/above.png" 
              alt="Hand" 
              className="hand-image"
            />
          </div>
          <div className="text-container">
            <Shuffle
              text="Konnichi WOW"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={false}
              loop={true}
              loopDelay={1}
              respectReducedMotion={true}
              style={{
                fontSize: '6rem', 
                color: '#ffffff',
                fontWeight: 'bold',
                margin: 0,
                padding: 0,
                fontFamily: '"Holtwood One SC", system-ui',
                letterSpacing: '8px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Circular Gallery Section */}
      <div className="gallery-section">
        <h1 className="gallery-heading">Hi ! </h1>
        <h2 className="gallery-heading2">I am Tenkun</h2>
        <div style={{ height: '600px', width: '100%', position: 'relative', padding: '0 40px' }}>
          <CircularGallery 
            items={galleryItems}
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
          />
        </div>
      </div>

      {/* ScrollFloat Section */}
      <div className="scroll-float-section">
        <div className="scroll-float-container">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="scroll-float-text-custom"
          >
            Wanna learn Japanese ?
          </ScrollFloat>

          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=40%'
            scrollEnd='bottom bottom-=30%'
            stagger={0.02}
            textClassName="scroll-float-text-custom"
          >
            You've come   to the right  place 
          </ScrollFloat>

          {/* Animated Button */}
          <AnimatedButton onClick={startQuizFromButton}>
            QUIZ
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Home;