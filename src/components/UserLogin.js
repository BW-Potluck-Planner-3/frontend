import React from 'react';

export default function UserLogin(props) {
  const { values, disabled, errors} = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form onSubmit={onSubmit}>
      {/* Log In Errors */}
      <div className='errors'>
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </div>
      {/* Username Input */}
      <div className='form-outline mb-4'>
        <input 
          type='text'
          placeholder='Username'
          className='form-control'
          id='usernameInput'
          value={values.userName}
        />
        <label className='form-label' for='usernameInput'>Username</label>
      </div>
      {/* Password Input */}
      <div className='form-outline mb-4'>
        <input 
          type='password'
          className='form-control'
          id='passInput'
          value={values.password}
        />
        <label className='form-label' for='passInput'>Password</label>
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
      <button type='submit' disabled={disabled}>Sign In</button>
      {/* Register Link */}
      <div className='text-center'>
        <p>Not signed up?<a href='#'>Register Now</a></p>
      </div>
    </form>
  )

}