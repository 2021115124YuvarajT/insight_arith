import React, { useState } from 'react';
import './nik_div.css';
import { useNavigate } from "react-router-dom";

const Exercises = () => {
  const [answers, setAnswers] = useState({});
  const [verificationStatus, setVerificationStatus] = useState({});

  const GivenAnswer = (field) => {
    switch (field) {
      case 'a':
        return 27.692;
      case 'b':
        return 43.942;
      case 'c':
        return 18.205;
      case 'd':
        return 59.622;
      case 'e':
        return 94.341;
      default:
        return 0;
    }
  };

  const handleChange = (field, event) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [field]: event.target.value,
    }));
  };

  const showAnswer = (field) => {
    const calculatedAnswer = GivenAnswer(field);
    setAnswers(() => ({
      [field]: calculatedAnswer,
    }));
  };

  const verifyAnswer = (field) => {
    const userAnswer = parseFloat(answers[field]);
    const correctAnswer = GivenAnswer(field);

    setVerificationStatus(() => ({
      [field]: Math.abs(userAnswer - correctAnswer) < 0.001 ? 'Correct' : 'Wrong',
    }));
  };

  const navigate=useNavigate();

  return (
    <div className="body">
      <h3 className="main_heading">EXERCISES</h3>
      <hr/>
      <form>
      <h4>Q1)Divide the following numbers upto 3 decimal places</h4>
        <label>a) 3517 ÷ 127</label>
        <input
          type="number"
          value={answers['a'] || ''}
          onChange={(event) => handleChange('a', event)}
        />
        <button type="button" onClick={() => showAnswer('a')}>
          SHOW ANSWER
        </button>
        <button type="button" onClick={() => verifyAnswer('a')}>
          VERIFY ANSWER
        </button>
        <span>{verificationStatus['a']}</span>
        <br />

        <label>b) 46315 ÷ 1054</label>
        <input
          type="number"
          value={answers['b'] || ''}
          onChange={(event) => handleChange('b', event)}
        />
        <button type="button" onClick={() => showAnswer('b')}>
          SHOW ANSWER
        </button>
        <button type="button" onClick={() => verifyAnswer('b')}>
          VERIFY ANSWER
        </button>
        <span>{verificationStatus['b']}</span>
        <br />

        <label>c) 710.014 ÷ 39</label>
        <input
          type="number"
          value={answers['c'] || ''}
          onChange={(event) => handleChange('c', event)}
        />
        <button type="button" onClick={() => showAnswer('c')}>
          SHOW ANSWER
        </button>
        <button type="button" onClick={() => verifyAnswer('c')}>
          VERIFY ANSWER
        </button>
        <span>{verificationStatus['c']}</span>
        <br />

        <label>d) 429345 ÷ 7201</label>
        <input
          type="number"
          value={answers['d'] || ''}
          onChange={(event) => handleChange('d', event)}
        />
        <button type="button" onClick={() => showAnswer('d')}>
          SHOW ANSWER
        </button>
        <button type="button" onClick={() => verifyAnswer('d')}>
          VERIFY ANSWER
        </button>
        <span>{verificationStatus['d']}</span>
        <br />

        <label>e) 7453 ÷ 79</label>
        <input
          type="number"
          value={answers['e'] || ''}
          onChange={(event) => handleChange('e', event)}
        />&nbsp;&nbsp;
        <button type="button" onClick={() => showAnswer('e')}>
          SHOW ANSWER
        </button>&nbsp;&nbsp;
        <button type="button" onClick={() => verifyAnswer('e')}>
          VERIFY ANSWER
        </button>&nbsp;&nbsp;
        <span>{verificationStatus['e']}</span>
      </form>
      <br/>
      <button style={{'margin-left':'35%'}}onClick ={()=>navigate('/division/ex_2')}>NEXT PART OF QUESTIONS</button>
      <br/>
      <button style={{'margin-left':'35%'}}onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
      <br/>
      <hr/>
    </div>
  );
};

export default Exercises;
