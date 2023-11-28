import React from 'react';
import './root.css';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return(
        <div className='nav-container'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        <span>Home</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/resume' className='nav-link'>
                        <span>Resume</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/gallery' className='nav-link'>
                        <span>Gallery</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-link'>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Root;