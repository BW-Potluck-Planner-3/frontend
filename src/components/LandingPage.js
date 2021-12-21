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
        <p>Gone are the days of texting back and forth to get your potluck organized. With Potluck Planner, simply create an event, enter any essential details, and allow your guests to pick which dishes they'd like to bring.</p>
        <ul className='list-group'>
          <li className='list-group-item text-primary'>Create and manage each potluck event</li>
          <li className='list-group-item text-primary'>Invite friends and share details</li>
          <li className='list-group-item text-primary'>Easily update and manage desired potluck dishes</li>
          <li className='list-group-item text-primary'>Enjoy a much more seamless potluck!</li>
        </ul>
      </div>
    </div>
  )
}