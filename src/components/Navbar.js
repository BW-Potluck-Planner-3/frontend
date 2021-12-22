import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {


  const token = localStorage.getItem('token');

  return (
    <nav className='navbar navbar-dark bg-dark d-flex justify-content-between'>

      {(token ? <Link to='/' className='navbar-brand'>Welcome Back <span className='userHighlight'>{props.name.slice(0, -1)}</span>!</Link>
        :
        <Link to='#' className='navbar-brand'>Potluck Planner</Link>
        )}
      
      <div className='nav-btn-group'>

        {(token ? <Link to="#" onClick={props.logout} className='btn btn-outline-primary'>Logout</Link>
        :
        <Link to='/login' className='btn btn-outline-primary'>Login</Link>
        )}

        {(token ? <Link to='/potlucks' className='btn btn-outline-primary'>Potlucks</Link>
        :
        <Link to='/register' className='btn btn-outline-secondary'>Register</Link>
        )}

        {(token ? <Link to='/potluckform' className='btn btn-outline-primary'>+ New</Link>
        :
        null
        )}

        
        
        
      </div>
    </nav>
  )
}
