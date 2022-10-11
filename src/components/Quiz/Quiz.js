import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div  className='quiz-container'>
           <div className='quiz-img'>
           <img src={logo} alt="" />
           </div>
           <div className='quiz-info'>
            <h3>{name}</h3>
            <p>{total}</p>
            <button>Start Quiz</button>
           </div>
        </div>
    );
};

export default Quiz;