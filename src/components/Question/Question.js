import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({questions}) => {
    const {options, question, correctAnswer
    } = questions;
    console.log(questions);
    const viewAnswer = () =>{
        return alert (correctAnswer)
    }
    return (
        <div className='question-part'>
            <div><h3>{question}</h3> 
            <div onClick={viewAnswer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="view">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
</svg>

            </div>
        </div>
            <div className='options'>
                {
                options.map(option =><Option option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;