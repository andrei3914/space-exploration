import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/shared/logo.svg';
import CloseIcon from '../../assets/shared/icon-close.svg';
import HamburgerIcon from '../../assets/shared/icon-hamburger.svg';

import './navigation.scss';

const Navigation = () => {
    const [visibility, setVisibility] = useState('false');

    //disable animations on page resize
    useEffect(() => {
        let resizeTimer: any;
        window.addEventListener("resize", () => {
            document.body.classList.add("resize-animation-stopper");
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                document.body.classList.remove("resize-animation-stopper");
            }, 400);
        });

    }, [])


    return (
        <nav className='navigation'>
            <NavLink to='/'><img src={Logo} alt='star-logo' className='nav-logo' /></NavLink>

            <button className='mobile-nav-toggle'
                aria-controls='primary-navigation'
                onClick={() => visibility === 'false' ? setVisibility('true') : setVisibility('false')}>
                <img src={visibility === 'true' ? CloseIcon : HamburgerIcon} alt="Menu" />
                <span className='sr-only'>Menu</span>
            </button>

            <ul className='primary-navigation' id='primary-navigation'
                data-visible={visibility}>
                <li><NavLink className='link' to='/'>
                    <span aria-hidden='true'>00</span>HOME
                </NavLink>
                </li>
                <li><NavLink className='link' to='/destination'>
                    <span aria-hidden='true'>01</span>DESTINATION
                </NavLink>
                </li>
                <li><NavLink className='link' to='/crew'>
                    <span aria-hidden='true'>02</span>CREW
                </NavLink>
                </li>
                <li><NavLink className='link' to='/technology'>
                    <span aria-hidden='true'>03</span>TECHNOLOGY
                </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation