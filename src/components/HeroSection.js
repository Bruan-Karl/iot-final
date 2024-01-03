import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './pages/Login';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted  />
      <h1>ClimaTracks</h1>
      <p>by Adamson University</p>
      <div className='hero-btns'>
        <Link to="/Login">
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              LOG IN
            </Button>
          </Link>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={() => console.log('hey')}
          >
            Contact Us <i className='far fa-play-circle' />
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;
