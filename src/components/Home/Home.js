import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <Header></Header>
               <div className='quiz-compo'>
               {
                    quizs.data.map(quiz =><Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
               </div>
        </div>
    );
};

export default Home;