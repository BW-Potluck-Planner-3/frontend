import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {

  const token = localStorage.getItem('token');

  return (
    <footer className='text-center text-white bg-dark'>
      <div className='container p-4 pb-0'>
        {(token ? 
        <section>
        <p className='d-flex justify-content-center align-items-center'>
          <span className='me-3'>You are logged in as <span className='userHighlight'>{props.name.slice(0,-1)}</span>.</span>
          <Link to='/register'>
            <button type='button' className='btn btn-outline-light btn-rounded'>Logout</button>
          </Link>
        </p>
        </section>
        :
        <section>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <Link to='/register'>
              <button type='button' className='btn btn-outline-light btn-rounded'>Sign Up</button>
            </Link>
          </p>
        </section>)}
        
      </div>
      <div className='text-center p-3 footer-bottom'>
        ©2021 Copyright:
        <Link to='/' className='text-white'>Potluck Planner</Link>
      </div>
    </footer>
  )
}