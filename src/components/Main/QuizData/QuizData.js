import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../../Question/Question';

const QuizData = () => {
    const quizData = useLoaderData();
    const {name, questions} =quizData.data;
    return (
        <div>
            <div>
                <h1>Quiz of: {name}</h1>
            </div>
            <div >
            {
            questions.map(question => <Question
            key={question.id}
            questions={question}
            ></Question>)
            }
            </div>
        </div>
    );
};

export default QuizData;