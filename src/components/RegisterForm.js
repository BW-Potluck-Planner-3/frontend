import React from 'react';
import { connect } from 'react-redux';

function RegisterForm(props) {
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
            <div>{regErrors.password}</div>
            <div>{props.error}</div>
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
          
          {/* Submit Button */}
          <button type='submit' disabled={regDisabled} className='btn btn-primary btn-block'>Create Account</button>
        </form>
      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  return ({
      error: state.errorMessage
  })
}

export default connect(mapStateToProps)(RegisterForm);
