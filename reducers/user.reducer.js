import {
    UPDATE_EMAIL, UPDATE_EMAIL_SUCCESS, UPDATE_EMAIL_FAIL, UPDATE_PASSWORD, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL
    , LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FACEBOOK, LOGIN_FACEBOOK_SUCCESS, LOGIN_FACEBOOK_FAIL
    , LOGIN_FAILED, LOGIN_FAILED_SUCCESS, LOGIN_FAILED_FAIL
} from '../actions/user.action'

const initialState = {
    email: '',
    password: '',
    isFeching: false,
    error: false
}


const user = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL:
            return { ...state, isFeching: true }
        case UPDATE_EMAIL_SUCCESS:
            return { ...state, email: action.payload }
        case UPDATE_EMAIL_FAIL:
            return { ...state, error: true }
        case UPDATE_PASSWORD:
            return { ...state, isFeching: false }
        case UPDATE_PASSWORD_SUCCESS:
            return { ...state, password: action.payload }
        case UPDATE_PASSWORD_FAIL:
            return { ...state, error: true }
        case LOGIN:
            return { ...state, isFeching: true }
        case LOGIN_SUCCESS:
            return action.payload
        case LOGIN_FAIL:
            return { ...state, error: true }
        case SIGNUP:
            return { ...state, isFeching: true }
        case SIGNUP_SUCCESS:
            return action.payload
        case SIGNUP_FAIL:
            return { ...state, error: true }
        case LOGIN_FACEBOOK:
            return { ...state, isFeching: true }
        case LOGIN_FACEBOOK_SUCCESS:
            return action.payload
        case LOGIN_FACEBOOK_FAIL:
            return { ...state, error: true }
        case LOGIN_FAILED:
            return { ...state, isFeching: false }
        case LOGIN_FAILED_SUCCESS:
            return { ...state, isFeching: false }
        case LOGIN_FAILED_FAIL:
            return { ...state, error: true }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer

