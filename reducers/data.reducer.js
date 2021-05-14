
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_PEOPLE_SUCCESS} from '../actions/index'

const initialState =  {
    data: [],
    isFeching: false,
    error: false
}


let dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case FETCHING_DATA_PEOPLE_SUCCESS:
            return {
                ...state,
                dataPeople: action.dataPeople,
                isFeching: false
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true 
            }
        default:
        return state
    }
}

export default dataReducer