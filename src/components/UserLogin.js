import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function UserLogin(props) {
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
        <h1 className='loginDiff'>Login To Your Account</h1>
        <form onSubmit={onSubmit}>
          {/* Log In Errors */}
          <div className='errors'>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{props.error}</div>
          </div>
          {/* Username Input */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='usernameInput'>Username</label>
            <input
              name='username' 
              type='text'
              placeholder='Username'
              className='form-control'
              id='usernameInput'
              value={values.userName}
              onChange={onChange}
            />
          </div>
          {/* Password Input */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='passInput'>Password</label>
            <input
              name='password' 
              type='password'
              className='form-control'
              id='passInput'
              value={values.password}
              onChange={onChange}
              placeholder='Password'
            />
          </div>
          {/* 2 column grid layout */}
          <div className='row mb-4'>
            <div className='col d-flex justify-content-center'>
              <div className='form-check'>
                <input
                  name='remember' 
                  className='form-check-input'
                  type='checkbox'
                  value={values.remember}
                  id='rememberCheck'
                  onChange={onChange}
                />
                <label className='form-check-label' htmlFor='rememberCheck'> Remember Me </label>
              </div>
            </div>
            <div className='col'>
              <Link to=''>Forgot Password?</Link>
            </div>
          </div>
          {/* Submit Button */}
          <button type='submit' disabled={disabled} className='btn btn-primary'>Sign In</button>
          {/* Register Link */}
          <br></br>
          <br></br>
          <div className='text-center'>
            <p>Not signed up? <Link to='/register'>Register Now</Link></p>
          </div>
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

export default connect(mapStateToProps)(UserLogin);
