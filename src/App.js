import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { registerUser, loginUser, newPotluck } from './actions';
import axiosWithAuth from './utils/axiosWithAuth';

import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import RegisterForm from './components/RegisterForm';
import loginSchema from './validate/LoginSchema';
import regSchema from './validate/RegSchema';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Potlucks from './components/Potlucks';
import PotluckForm from './components/PotluckForm';

// Initial States
const initLoginValues = {
  username: '',
  password: ''
}

const initRegValues = {
  username: '',
  password: '',
}

const initLoginErrors = {
  username: '',
  password: '', 
  remember: '',
}

const initRegErrors = {
  username: '',
  password: '',
}

const initPlValues = {
  potluck_name: '',
  date: '',
  time: '',
  location: '',
}

const initLoginDisabled = true;
const initRegDisabled = true;

function App(props) {

  const { push } = useHistory();

  const token = localStorage.getItem('token');

  const [loginValues, setLoginValues] = useState(initLoginValues);
  const [registerValues, setRegisterValues] = useState(initRegValues);
  const [plValues, setPlValues] = useState(initPlValues);

  const [loginErrors, setLoginErrors] = useState(initLoginErrors);
  const [regErrors, setRegErrors] = useState(initRegErrors);

  const [disabled, setDisabled] = useState(initLoginDisabled);
  const [regDisabled, setRegDisabled] = useState(initRegDisabled);


  let loggedInName = "";
  let message = localStorage.getItem("message");
  if (message) {
    loggedInName = message.split(" ")[2];
  } else {
    loggedInName = "";
  }


  const loginSubmit = () => {
    const loginCredentials = {
      username: loginValues.username.trim(),
      password: loginValues.password
    }
    props.loginUser(loginCredentials);
    
  }

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("message");
    push("/");
    window.location.reload(true);
  }


  const regSubmit = () => {
    const newReg = {
      username: registerValues.username.trim(),
      password: registerValues.password
    }
    props.registerUser(newReg);
    
  }

  const plSubmit = () => {
    const newPl = {
      potluck_name: plValues.plTitle.trim(),
      date: plValues.date,
      time: plValues.time,
      location: plValues.location
    }
    props.newPotluck(newPl);

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
        <Navbar
        logout={logoutHandler}
        name={loggedInName}/>
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
        <LandingPage
        name={loggedInName}/>
      </Route>
       {/* User Dashboard */}
       <PrivateRoute 
       path='/potluckform' 
       component={PotluckForm}
       data={{
         values:plValues,
         change:plInputChange,
         submit:plSubmit
       }}> 
       </PrivateRoute>
       <PrivateRoute 
       path='/potlucks' 
       component={Potlucks}
       data={{
         logout:logoutHandler,
         name:loggedInName
       }}> 
       </PrivateRoute>
       
     
      {/* Footer */}
      <Footer
      logout={logoutHandler}
      name={loggedInName}/>
    </div>
  );
}

const mapActionsToProps = {
  registerUser,
  loginUser, 
  newPotluck
}


export default connect(null, mapActionsToProps)(App);
