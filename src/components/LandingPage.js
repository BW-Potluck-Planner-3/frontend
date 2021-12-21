import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='landing-container'>
      <div className='hero-section'>
        <h1>Potluck Planner</h1>
        <p>Because organizing potlucks through text messages, spreadsheets, and to-do lists is <span>the worst.</span></p>
        <Link to='/register'>
          <button className='btn btn-primary btn-lg'>Register Now</button>
        </Link>
      </div>
      <div className='about-section'>
        <h2>About Potluck Planner</h2>
      </div>
    </div>
  )
}