import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        
    {
      path: '/home',
      loader: () =>{
        return fetch ('https://openapi.programming-hero.com/api/quiz')
      } ,
      element: <Home></Home>
    },
    {
      path: '/topics',
      element: <Topics></Topics>
    },
    {
      path: '/statistics',
      element: <Statistics></Statistics>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    }
      ]
    }
  ])


  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
