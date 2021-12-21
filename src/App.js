import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import RegisterForm from './components/RegisterForm';
import loginSchema from './validate/LoginSchema';
import regSchema from './validate/RegSchema';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

// Initial States
const initLoginValues = {
  username: '',
  password: '',
  remember: false,
}

const initRegValues = {
  username: '',
  password: '',
  confPassword: '',
}

const initLoginErrors = {
  username: '',
  password: '', 
  remember: '',
}

const initRegErrors = {
  username: '',
  password: '',
  confPassword: '',
}

const initLoginDisabled = true;
const initRegDisabled = true;

function App() {
  const [loginValues, setLoginValues] = useState(initLoginValues);
  const [registerValues, setRegisterValues] = useState(initRegValues);

  const [loginErrors, setLoginErrors] = useState(initLoginErrors);
  const [regErrors, setRegErrors] = useState(initRegErrors);

  const [disabled, setDisabled] = useState(initLoginDisabled);
  const [regDisabled, setRegDisabled] = useState(initRegDisabled);

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

  const postNewReg = newReg => {
    axios.post('https://potluck-planner-3-ft.herokuapp.com/api/auth/login', newReg)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setRegisterValues(initRegValues);
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

  const regSubmit = () => {
    const newReg = {
      username: registerValues.username.trim(),
      password: registerValues.password,
      confPassword: registerValues.confPassword,
    }
    postNewReg(newReg);
  }

  const validate = (name, value) => {
    yup.reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  }

  const regValidate = (name, value) => {
    yup.reach(regSchema, name)
      .regValidate(value)
      .then(() => setRegErrors({ ...regErrors, [name]: '' }))
      .catch(err => setRegErrors({ ...regErrors, [name]: err.errors[0] }))
  }

  const loginInputChange = (name, value) => {
    validate(name, value);
    setLoginValues({
      ...loginValues,
      [name]: value
    }) 
  }

  const regInputChange = (name, value) => {
    regValidate(name, value);
    setRegisterValues({
      ...registerValues,
      [name]: value
    })
  }

  useEffect(() => {
    loginSchema.isValid(loginValues).then(valid => setDisabled(!valid))
  }, [loginValues]);

  useEffect(() => {
    regSchema.isValid(registerValues).then(valid => setRegDisabled(!valid))
  }, [registerValues]);

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
        <RegisterForm 
          values={registerValues}
          change={regInputChange}
          submit={regSubmit}
          disabled={regDisabled}
          errors={regErrors}
        />
      </Route>
      {/* Landing Page Content */}
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
