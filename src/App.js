import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizData from './components/Main/QuizData/QuizData';
import NotFound from './components/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[ 
    {
      path: '/',
      loader: () =>{
        return fetch ('https://openapi.programming-hero.com/api/quiz')
      } ,
      element: <Home></Home>
    },
    {
      path: '/home',
      loader: () =>{
        return fetch ('https://openapi.programming-hero.com/api/quiz')
      } ,
      element: <Home></Home>
    },
    {
      path: '/statistics',
      element: <Statistics></Statistics>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },
    {
      path: '/home/:homeId',
      loader: async ({params})=>{
        return fetch (`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)

      },
      element: <QuizData></QuizData>
    }
      ]
    },
    {
      path:'*',
      element: <NotFound></NotFound>
    }
  ])


  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
