import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav-itam'>
            <div className='nav-logo'>
            <h1><strong>MEGA QUIZ</strong></h1>
            </div>
            <div className='nav-link'>
                <Link to='/home'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>

        </nav>
    );
};

export default Nav;