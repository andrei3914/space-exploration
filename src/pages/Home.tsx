import React from 'react'
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

import './home.scss';

const Home = () => {
    return (
        <div className='home-container'>
            <Navigation />
            <div className="home-body">
                <div className="home-left">
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <p>Let's face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the edge of it. Well
                        sit back, and relax because we'll give you a truly out of this world experience!
                    </p>
                </div>

                <div className="home-right">
                    <NavLink to='/destination'><button className='home-button'><h4>EXPLORE</h4></button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home