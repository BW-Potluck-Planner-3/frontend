import axios from 'axios';

const axiosWithAuth = ()=> {

    const token = localStorage.getItem('token');

    return axios.create({
        headers: {authorization: token},
        baseURL: "https://potluck-planner-3-ft.herokuapp.com"
    });
    
}

export default axiosWithAuth;
