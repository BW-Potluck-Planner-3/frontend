import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Navbar from './components/Navbar';
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
    axios.post('https://potluck-planner-3-ft.herokuapp.com/api/auth/login', newLogin)
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
        <Navbar/>
      </header>
      {/* User login */}
      <Route path='/login'>
        <UserLogin 
          values={loginValues} 
          change={loginInputChange} 
          submit={loginSubmit} 
          disabled={disabled} 
          errors={loginErrors}/>
      </Route>
      {/* Register form */}
      <Route path='/register'>
        
      </Route>
    </div>
  );
}

export default App;
