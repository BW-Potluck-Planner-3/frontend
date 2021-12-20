import React from 'react';
import { Link } from 'react-router-dom';

export default function UserLogin(props) {
  const { values, submit, disabled, errors} = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <div className='login-container shadow-lg'>
      <form onSubmit={onSubmit}>
        {/* Log In Errors */}
        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
        {/* Username Input */}
        <div className='form-outline mb-4'>
          <label className='form-label' for='usernameInput'>Username</label>
          <input 
            type='text'
            placeholder='Username'
            className='form-control'
            id='usernameInput'
            value={values.userName}
          />
        </div>
        {/* Password Input */}
        <div className='form-outline mb-4'>
          <label className='form-label' for='passInput'>Password</label>
          <input 
            type='password'
            className='form-control'
            id='passInput'
            value={values.password}
          />
        </div>
        {/* 2 column grid layout */}
        <div className='row mb-4'>
          <div className='col d-flex justify-content-center'>
            <div className='form-check'>
              <input 
                className='form-check-input'
                type='checkbox'
                value={values.remember}
                id='rememberCheck'
              />
              <label className='form-check-label' for='rememberCheck'> Remember Me </label>
            </div>
          </div>
          <div className='col'>
            <a href='#'>Forgot Password?</a>
          </div>
        </div>
        {/* Submit Button */}
        <button type='submit' disabled={disabled} className='btn btn-primary'>Sign In</button>
        {/* Register Link */}
        <div className='text-center'>
          <p>Not signed up? <Link to='/register'>Register Now</Link></p>
        </div>
      </form>
    </div>
  )

}