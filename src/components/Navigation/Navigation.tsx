import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.svg';

const Navigation = () => {

    const toggleNav = () => {
        const primaryNav = document.querySelector('.primary-navigation');
        const visibility = primaryNav?.getAttribute('data-visible');
        const navToggle = document.querySelector('.mobile-nav-toggle');

        if (visibility === 'false') {
            primaryNav?.setAttribute('data-visible', 'true');
            navToggle?.setAttribute('aria-expanded', 'true');
        } else if (visibility === 'true') {
            primaryNav?.setAttribute('data-visible', 'false');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    };

    return (
        <nav>
            <img src={Logo} alt='star-logo' className='nav-logo'/>
            
            <button className='mobile-nav-toggle'
                aria-controls='primary-navigation' aria-expanded='false'
                onClick={() => toggleNav()}>
                <span className='sr-only'>Menu</span>
            </button>
             
            <ul className='primary-navigation' id='primary-navigation'
                data-visible='false'>
                <li><Link className='link' to='/'>
                        <span aria-hidden='true'>00</span>HOME
                    </Link>
                </li>
                <li><Link className='link' to='/destination'>
                        <span aria-hidden='true'>01</span>DESTINATION
                    </Link>
                </li>
                <li><Link className='link' to='/crew'>
                        <span aria-hidden='true'>02</span>CREW
                    </Link>
                </li>
                <li><Link className='link' to='/technology'>
                        <span aria-hidden='true'>03</span>TECHNOLOGY
                    </Link>
                </li>
            </ul>
        </nav>
  );
};

export default Navigation