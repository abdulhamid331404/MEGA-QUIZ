import React from 'react';
import './Header.css'
import img1 from '../images/images1.jpg'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-info'>
                <h1>Win your prize.</h1>
                <p>Where there are thousands <br /> of prizes of your choice that <br /> you just need to spend a <br /> little talent to take the chance.</p>
            </div>
            <div className='header-banner'>
            <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Header;