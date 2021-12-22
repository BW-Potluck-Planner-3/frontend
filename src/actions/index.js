import axios from "axios";
import history from "../utils/history";
import axiosWithAuth from "../utils/axiosWithAuth";



export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const LOGIN_USER_START = "REGISTER_USER_START";
export const LOGIN_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const LOGIN_USER_FAIL = "REGISTER_USER_FAIL";

export const NEW_POTLUCK = "NEW_POTLUCK";

export const registerUser = (newUser) => (dispatch) => {
   dispatch({type: REGISTER_USER_START});
   axios.post('https://potluck-planner-3-ft.herokuapp.com/api/auth/register', newUser)
   .then(res => {
     console.log(res);
     dispatch({type:REGISTER_USER_SUCCESS, payload: res.data.message})
     history.push('/login')
   })
   .catch(err => {
     console.error(err);
     dispatch({type: REGISTER_USER_FAIL, payload: err.response.data.message })
   })
}

export const loginUser = (loginCredentials) => (dispatch) => {
    dispatch({type: LOGIN_USER_START});
    axios.post('https://potluck-planner-3-ft.herokuapp.com/api/auth/login', loginCredentials)
    .then(res => {
        localStorage.setItem('message', res.data.message);
        localStorage.setItem('token', res.data.token);
        dispatch({type:LOGIN_USER_SUCCESS, payload: res.data.message});
        history.push('/potlucks');
        window.location.reload(true);


    })
    .catch(err => {
        console.error(err);
        dispatch({type: LOGIN_USER_FAIL, payload: err.response.data.message})
    })
    
 }

 export const newPotluck = (newPl) => {
    axiosWithAuth.post('/api/users/1/potlucks', newPl)
    .then(res => {
        console.log(res);
        history.push('/potlucks');
    })
    .catch(err => {
        console.error(err);
       
    })
    
 }
