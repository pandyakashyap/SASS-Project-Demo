import React from 'react';
import '../Styles/style.scss';

function Navbar()
{
    return(
        <div className='navbar'>
            <div className='links'>
                <a href='/home'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar;