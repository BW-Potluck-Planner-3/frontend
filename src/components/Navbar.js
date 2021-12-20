import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark d-flex justify-content-between'>
      <Link to='/' className='navbar-brand'>Potluck Planner</Link>
      <div className='nav-btn-group'>
        <Link to='/login' className='btn btn-outline-primary'>Login</Link>
        <Link to='/register' className='btn btn-outline-secondary'>Register</Link>
      </div>
    </nav>
  )
}