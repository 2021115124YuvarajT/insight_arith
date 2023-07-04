import React,{useState} from 'react'
import '../division/nik_div.css';
import { useNavigate } from "react-router-dom";
import Sidenavbar from '../Sidenavbar/Sidenavbar';

const questions_set_2=[
    { id:1,question:'1)107',answer:10.344},
    { id:2,question:'2)736',answer:27.129},
    { id:3,question:'3)2437',answer:49.365},
    { id:4,question:'4)9555',answer:97.749},
    { id:5,question:'5)68943',answer:262.569}
];

const Ex_2 = () => {
    const navigate=useNavigate();    
    const [answers,setAnswers]= useState(Array(5).fill(""));
    const [verifications, setVerification] = useState(Array(5).fill("give it a try!"));

    function handleChange(event,index)
    {
    const new_answers=[...answers];
    new_answers[index]=event.target.value;
    setAnswers(new_answers);
    }
    function handleShow(index) {
        const correct_answers = [...answers];
        correct_answers[index] = questions_set_2[index].answer;
        setAnswers(correct_answers);
    }
    function handleVerify(index) {
        const isCorrect = parseFloat(answers[index]) === questions_set_2[index].answer;
        const newVerification = [...verifications];
        newVerification[index] = isCorrect ? "Correct" : "Wrong";
        setVerification(newVerification);
    }

  return (
    <div>
        <Sidenavbar/>
            <div class='body'>
            <h3 className="main_heading">EXERCISES PART - 2</h3>
            <hr/>
            <h4>Try these too!</h4>
            <h4>Q2)Find the square root of the following numbers up to 3 decimal places (use mishrank wherever necessary):</h4>
            {questions_set_2.map((q,index) => (
            <div id={q.id}>
            <p>{q.question}</p>
            <input class='input_sq_rt' placeholder='enter the square root' type='text' onChange={(e) => handleChange(e, index)} value={answers[index]}/>&nbsp;&nbsp;
            <button type='show_button' onClick={()=>handleShow(index)}>SHOW ANSWERS</button>&nbsp;&nbsp;
            <button type='verify_button' onClick={()=>handleVerify(index)}>VERIFY ANSWERS</button>&nbsp;&nbsp;
            <span className="try_span" style={verifications[index]=== "Wrong" ? {'color':'red'}:{'color':'green'}}>
                {verifications[index]}
            </span>
            </div>
            ))}<br/>
            <hr/>
            <button style={{'margin-left':'13%'}} onClick ={()=>navigate('/squar_root')}>BACK TO BASICS OF SQUARE ROOT</button>&nbsp;&nbsp;
            <button onClick ={()=>navigate(-1)}>BACK TO WHERE YOU LEFT</button>
            <br/>
            <hr/>
        </div>
    </div>
  )
}

export default Ex_2
