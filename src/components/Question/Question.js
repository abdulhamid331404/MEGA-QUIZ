import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({questions}) => {
    const {options, question, correctAnswer
    } = questions;
    console.log(questions, options);
    return (
        <div className='question-part'>
            <div><h3>{question}</h3></div>
            <div className='options'>
                {
                options.map(option =><Option option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;