import React, { useState } from 'react'

import Navigation from '../components/Navigation/Navigation';
import crew from '../components/Crew/crew.json';
import CrewInfo from '../components/Crew/CrewInfo';
import ImgHur from '../assets/crew/image-douglas-hurley.webp';
import ImgMark from '../assets/crew/image-mark-shuttleworth.webp';
import ImgVic from '../assets/crew/image-victor-glover.webp';
import ImgAno from '../assets/crew/image-anousheh-ansari.webp';

import './crew.scss';

const Crew = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className='crew-container'>
      <Navigation />
      <div className='crew-body'>
        <h1 className='page-title'><span>02</span> MEET YOUR CREW </h1>
        <div className="crew-content">
          <div className='img-container'>
            <img src={
              slide === 0
                ? ImgHur : slide === 1
                  ? ImgMark : slide === 2
                    ? ImgVic : ImgAno
            } alt="" />
            <hr />
          </div>
          <div className='info-container'>
            <ul>
              <li onClick={() => setSlide(0)}><button></button></li>
              <li onClick={() => setSlide(1)}><button></button></li>
              <li onClick={() => setSlide(2)}><button></button></li>
              <li onClick={() => setSlide(3)}><button></button></li>
            </ul>
            <CrewInfo
              name={crew[slide].name}
              title={crew[slide].title}
              content={crew[slide].content}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew