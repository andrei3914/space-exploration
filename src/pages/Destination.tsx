import React, { useState } from 'react'

import Navigation from '../components/Navigation/Navigation'
import destinations from '../components/Destination/destinations.json';
import DestinationInfo from '../components/Destination/DestinationInfo';
import ImgMoon from '../assets/destination/image-moon.webp';
import ImgMars from '../assets/destination/image-mars.webp';
import ImgEuropa from '../assets/destination/image-europa.webp';
import ImgTitan from '../assets/destination/image-titan.webp';

import './destination.scss';

const Destination = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className='destination-container'>
      <Navigation />
      <div className='destination-body'>
        <h1 className='page-title'><span>01</span> PICK YOUR DESTINATION </h1>
        <div className="destination-content">
          <div className='img-container'>
            <img src={
              slide === 0
                ? ImgMoon : slide === 1
                  ? ImgMars : slide === 2
                    ? ImgEuropa : ImgTitan
            } alt="" />
          </div>
          <div className='info-container'>
            <ul>
              <li onClick={() => setSlide(0)}>Moon</li>
              <li onClick={() => setSlide(1)}>Mars</li>
              <li onClick={() => setSlide(2)}>Europa</li>
              <li onClick={() => setSlide(3)}>Titan</li>
            </ul>
            <DestinationInfo
              name={destinations[slide].name}
              description={destinations[slide].description}
              distance={destinations[slide].distance}
              travelTime={destinations[slide].travelTime}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination