import { 
    REGISTER_USER_START, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "../actions";

export const initialState = {
    userRegistered: false,
    errorMessage: "",
    isLoggedIn: false
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case REGISTER_USER_START:
            return {
                ...state
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                errorMessage: "",
                userRegistered: true
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                errorMessage: action.payload
            }
        case LOGIN_USER_START:
            return {
                ...state
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                errorMessage: ""
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                errorMessage: action.payload
            }

        default:
            return(state)
        
        
    }

}

export default reducer;