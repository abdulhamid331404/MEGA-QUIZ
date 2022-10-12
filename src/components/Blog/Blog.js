import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-compo'>
            <div  className='blog-container'>
               <div className='single-question'>
            <h1>What is the purpose of <strong>React Router</strong>??</h1>
            <p>React Router is a standard library for routing in React. 
                It enables <br /> the navigation among views of various 
                components in a React Application, allows
                changing the <br /> browser URL, and keeps the UI in 
                sync with the URL.Let us create a simple application 
                to React to <br /> understand how the React Router works. 
                The application will contain three components: <br />                 home component, about a component, and contact
                component. <br /> We will use React Router to navigate 
                between these components.</p>
               </div>
               <div className='single-question'>
            <h1>How does context API work??</h1>
            <li>React context is an essential tool for every React developer to know.</li>
            <li>Despite React’s popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance and harming readability. Component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling.</li>
            <li>The React Context API has been around as an experimental feature for a while now, but only in React’s version React v18.0  did it become safe to use in production. </li>
               </div>
               </div>
               <div className='react-ref'>
                <h1><strong>React JS useRef Hook</strong></h1>
                <p>The useRef hook is the new addition in React. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>
                <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
               </div>
        </div>
    );
};

export default Blog;