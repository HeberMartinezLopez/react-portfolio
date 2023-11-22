import React from 'react';
import './root.css';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return(
        <div className='nav-container'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        <span>home</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/work' className='nav-link'>
                        <span>work-experience</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/gallery' className='nav-link'>
                        <span>gallery</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-link'>
                        <span>contact</span>
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