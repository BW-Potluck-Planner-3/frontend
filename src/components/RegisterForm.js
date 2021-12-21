import React from 'react';

export default function UserLogin(props) {
  const { values, change, submit, disabled, errors} = props;

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
            <div>{errors.username}</div>
            <div>{errors.password}</div>
          </div>
          {/* Username Input */}
          <div className='form-outline mb-4'>
            <label className='form-label' for='usernameInput'>Enter a Username</label>
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
            <label className='form-label' for='passInput'>Enter a Password</label>
            <input
              name='password' 
              type='password'
              className='form-control'
              id='passInput'
              value={values.password}
              onChange={onChange}
              placeholder='Password'
            />
            <p className='form-description'>Password must be at least 8 characters.</p>
          </div>
          {/* Confirm Password */}
          <div className='form-outline mb-4'>
            <label className='form-label' for='confPassInput'>Confirm Password</label>
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
          <button type='submit' disabled={disabled} className='btn btn-primary btn-block'>Create Account</button>
        </form>
      </div>
    </div>
  )

}