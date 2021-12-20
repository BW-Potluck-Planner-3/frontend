import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='text-center text-white bg-dark'>
      <div className='container p-4 pb-0'>
        <section>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <Link to='/register'>
              <button type='button' className='btn btn-outline-light btn-rounded'>Sign Up</button>
            </Link>
          </p>
        </section>
      </div>
      <div className='text-center p-3 footer-bottom'>
        ©2021 Copyright:
        <Link to='/' className='text-white'>Potluck Planner</Link>
      </div>
    </footer>
  )
}