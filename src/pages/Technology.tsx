import React, { useState } from 'react'

import Navigation from '../components/Navigation/Navigation'
import TechInfo from '../components/Technology/TechInfo';
import tech from '../components/Technology/tech.json';
import ImgLaunch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import ImgSpaceport from '../assets/technology/image-spaceport-portrait.jpg';
import ImgCapsule from '../assets/technology/image-space-capsule-portrait.jpg';

import './technology.scss';

const Technology = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="tech-container">
      <div className='crew-container'>
        <Navigation />
        <div className='crew-body'>
          <h1 className='page-title'><span>03</span> SPACE LAUNCH 101 </h1>
          <div className="crew-content">
            <div className='img-container'>
              <img src={
                slide === 0
                  ? ImgLaunch : slide === 1
                    ? ImgSpaceport : ImgCapsule
              } alt="" />
            </div>
            <div className='info-container'>
              <ul>
                <li onClick={() => setSlide(0)}><button>1</button></li>
                <li onClick={() => setSlide(1)}><button>2</button></li>
                <li onClick={() => setSlide(2)}><button>3</button></li>
              </ul>
              <TechInfo
                name={tech[slide].name}
                description={tech[slide].description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology