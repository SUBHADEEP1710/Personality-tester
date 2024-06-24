import React from 'react';
import ReactSlider from 'react-slider';
import './Question.css';

function Question({ question, answer, onSliderChange }) {
  return (
    <div className="question-container">
      <div className='qsn'>{question}</div>
      <div className="slider-wrapper">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={answer}
          min={1}
          max={5}
          onChange={onSliderChange}
        />
        <div className="slider-labels">
          <span>Strongly Disagree</span>
          <span>Disagree</span>
          <span>Neutral</span>
          <span>Agree</span>
          <span>Strongly Agree</span>
        </div>
      </div>
    </div>
  );
}

export default Question;
