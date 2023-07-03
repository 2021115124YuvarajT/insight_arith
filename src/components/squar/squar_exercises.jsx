import React, { useState } from "react";
//import "./try_nikh.css";
import { NavLink } from "react-router-dom";



const questions = [
    { id: 1, question: "1. Find the square of 593 ", answer: 351649 },
    { id: 2, question: "2.Find the square of 74612", answer:   5566950544 },
    { id: 3, question: "3.Find the square of 327.8", answer: 107452.84 },
    { id: 4, question: "4.Find the fourth power of 31", answer: 923521 },
  ];
  

export default function Try_pv() {
    
  const [answers, setAnswers] = useState(Array(7).fill(""));
  const [verification, setVerification] = useState(Array(7).fill("give it a try!"));

  function handleChange(event, index) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  function handleClick(index) {
    const newAnswers = [...answers];
    newAnswers[index] = questions[index].answer;
    setAnswers(newAnswers);
  }

  function handleVerify(index) {
    const isCorrect = parseFloat(answers[index]) === questions[index].answer;
    const newVerification = [...verification];
    newVerification[index] = isCorrect ? "Correct" : "Wrong";
    setVerification(newVerification);
  }

 return (
    <div className="top-most-div">
      <h1>Try the following problems!</h1>

      <div className="question_block">
      {questions.map((q, index) => (
  <div key={q.id}>
    <p>{q.question}</p>
    {/*<p>{q.style && <p style={q.style}></p>} {/* Conditionally render the image </p>*/}
    <input
      className="input_class"
      type="text"
      onChange={(e) => handleChange(e, index)}
      value={answers[index]}
    />
    <button className="input_button" onClick={() => handleClick(index)}>
      Show Answer
    </button>
    <button className="verify_button" onClick={() => handleVerify(index)}>
      Verify
    </button>
    <span className="try_span" style={verification[index] === "Correct" || verification[index] === "give it a try!" ? { 'color': 'green' } : { 'color': 'red' }}>{verification[index]}</span>
  </div>
))} 
        <h4>Here you go for the step by step solution for above questions!</h4>
        <button><NavLink to="/squar/squar_stepbystep">Click here!</NavLink></button>
            
      </div>
    
    </div>
  );
}
