import React, { useState } from 'react';
import './App.css';
import { ProgressBar, Question } from './components';

const questions = [
  'I have ambitious aims of making a difference.',
  'My leadership journey has progressed as I anticipated.',
  'I have spent fewer than 4 years in full time service or ministry.'
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(3));

  const handleSliderChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500); 
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div id="root">
      <div className="App">
        <header>
          <div className='heading'>ARE YOU DISILLUSIONED?</div>
        </header>
        <main className='main'>
          <div className="container assessment">
            <div className='MuiBox'>
              <div className='mul'></div>
            </div>
            <div>
              <div className='steps-container'>
                <div>
                  <div className='steps'>
                    <div className='spacer'>
                      <div>
                        <ProgressBar current={currentQuestion + 1} total={questions.length} />
                        <div className='progress-name'>IDEALISTIC</div>
                        <div className="question-number">
                          {currentQuestion + 1} / {questions.length}
                        </div>
                        <Question
                          question={questions[currentQuestion]}
                          answer={answers[currentQuestion]}
                          onSliderChange={handleSliderChange}
                        />
                        <div className="navigation-buttons">
                          <button onClick={prevQuestion} disabled={currentQuestion === 0}>
                            &#8592; PREV
                          </button>
                          <button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
                            NEXT &#8594;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
