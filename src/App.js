import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import UserLogin from './components/UserLogin';
import loginSchema from './validate/LoginSchema';

// Initial States
const initLoginValues = {
  username: '',
  password: '',
  remember: false,
}

const initLoginErrors = {
  username: '',
  password: '', 
  remember: '',
}

const initLoginDisabled = true;

function App() {
  const [loginValues, setLoginValues] = useState(initLoginValues);
  const [loginErrors, setLoginErrors] = useState(initLoginErrors);
  const [disabled, setDisabled] = useState(initLoginDisabled);

  const postNewLogin = newLogin => {
    axios.post('', newLogin)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoginValues(initLoginValues);
      })
  }
  
  const loginSubmit = () => {
    const newLogin = {
      username: loginValues.username.trim(),
      password: loginValues.password,
      remember: loginValues.remember,
    }
    postNewLogin(newLogin);
  }

  const validate = (name, value) => {
    yup.reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  }

  const loginInputChange = (name, value) => {
    validate(name, value);
    setLoginValues({
      ...loginValues,
      [name]: value
    }) 
  }

  useEffect(() => {
    loginSchema.isValid(loginValues).then(valid => setDisabled(!valid))
  }, [loginValues]);

  return (
    <div className="App">
      <header>
        {/* Navbar */}
        <nav className='navbar navbar-dark bg-dark d-flex justify-content-between'>
          <Link to='/' className='navbar-brand'>Potluck Planner</Link>
          <div className='nav-btn-group'>
            <Link to='/login' className='btn btn-outline-primary'>Login</Link>
            <Link to='/register' className='btn btn-outline-secondary'>Register</Link>
          </div>
        </nav>
      </header>
      {/* User login container */}
      <div className='container'>
        <Route path='/login'>
          <UserLogin values={loginValues} change={loginInputChange} submit={loginSubmit} disabled={disabled} errors={loginErrors}/>
        </Route>
      </div>
      {/* Register container */}
      <div className='container'>
        <Route path='/register'>
          
        </Route>
      </div>
    </div>
  );
}

export default App;
