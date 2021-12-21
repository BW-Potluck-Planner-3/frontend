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
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

// Initial States
const initLoginValues = {
  username: '',
  password: '',
  remember: false,
}

const initRegValues = {
  username: '',
  regPassword: '',
  confPassword: '',
}

const initPlValues = {
  plTitle: '',
  date: '',
  time: '',
  location: '',
  dishes: '',
  guests: '',
}

const initLoginErrors = {
  username: '',
  password: '', 
  remember: '',
}

const initRegErrors = {
  username: '',
  regPassword: '',
  confPassword: '',
}

const initLoginDisabled = true;
const initRegDisabled = true;

function App() {
  const [loginValues, setLoginValues] = useState(initLoginValues);
  const [registerValues, setRegisterValues] = useState(initRegValues);
  const [plValues, setPlValues] = useState(initPlValues);

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

  const postNewPl = newPl => {
    axios.post('https://potluck-planner-3-ft.herokuapp.com/api/auth/login', newPl)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setPlValues(initPlValues);
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
      regPassword: registerValues.regPassword,
      confPassword: registerValues.confPassword,
    }
    postNewReg(newReg);
  }

  const plSubmit = () => {
    const newPl = {
      plTitle: plValues.plTitle.trim(),
      date: plValues.date,
      time: plValues.time,
      location: plValues.location,
      dishes: plValues.dishes,
      guests: plValues.guests,
    }
    postNewPl(newPl);
  }

  const validate = (name, value) => {
    yup.reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  }

  const regValidate = (name, value) => {
    yup.reach(regSchema, name)
      .validate(value)
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

  const plInputChange = (name, value) => {
    setPlValues({
      ...plValues,
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
          regErrors={regErrors}
        />
      </Route>
      {/* Landing Page Content */}
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      {/* User Dashboard */}
      <Route path='/dashboard'>
        <Dashboard 
          values={plValues}
          change={plInputChange}
          submit={plSubmit}
        />
      </Route>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
