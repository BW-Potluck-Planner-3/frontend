import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import UserLogin from './components/UserLogin';

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

  return (
    <div className="App">
      <Route path='/login'>
        <UserLogin values={loginValues} submit={loginSubmit} disabled={disabled} errors={loginErrors}/>
      </Route>
    </div>
  );
}

export default App;
