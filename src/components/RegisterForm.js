import React from 'react';
import { Link } from 'react-router-dom';

export default function UserLogin(props) {
  const { values, change, submit, regDisabled, regErrors} = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <div className='container'>
      <div className='login-container shadow-lg d-flex flex-column'>
        <h1>Create A New Account</h1>
        <form onSubmit={onSubmit}>
          {/* Log In Errors */}
          <div className='errors'>
            <div>{regErrors.username}</div>
            <div>{regErrors.regPassword}</div>
            <div>{regErrors.confPassword}</div>
          </div>
          {/* Username Input */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='usernameInput'>Enter a Username</label>
            <input
              name='username' 
              type='text'
              placeholder='Username'
              className='form-control'
              id='usernameInput'
              value={values.userName}
              onChange={onChange}
            />
            <p className='form-description'>Username must be at least 6 characters.</p>
          </div>
          {/* Password Input */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='passInput'>Enter a Password</label>
            <input
              name='regPassword' 
              type='password'
              className='form-control'
              id='passInput'
              value={values.regPassword}
              onChange={onChange}
              placeholder='Password'
            />
            <p className='form-description'>Password must be at least 8 characters.</p>
          </div>
          {/* Confirm Password */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='confPassInput'>Confirm Password</label>
            <input 
              name='confPassword'
              type='password'
              className='form-control'
              id='confPassInput'
              value={values.confPassword}
              onChange={onChange}
              placeholder='Confirm Password'
            />
          </div>
          {/* Submit Button */}
          <Link to='/dashboard'>
            <button type='submit' disabled={regDisabled} className='btn btn-primary btn-block'>Create Account</button>
          </Link>
        </form>
      </div>
    </div>
  )

}