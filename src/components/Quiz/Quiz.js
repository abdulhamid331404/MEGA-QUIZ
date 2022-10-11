import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz, handleStartQuiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div  className='quiz-container'>
           <div className='quiz-img'>
           <img src={logo} alt="" />
           </div>
           <div className='quiz-info'>
            <h3>{name}</h3>
            <p>{total}</p>
            <Link to={`/home/${id}`}>
            <button className='quiz-btn'>Start Quiz</button></Link>
           </div>
        </div>
    );
};

export default Quiz;