import {fetchSchedule, fetchPeople} from '../api/user.service'

export const FETCHING_DATA = "FETCHING_DATA"
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_PEOPLE_SUCCESS = "FETCHING_DATA_PEOPLE_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE"

export const selected_tab = (tabId2) => {
    return {type: 'selected_tab', payload: tabId2}
}

export const getData = () => {
    return {type: FETCHING_DATA}
}

export const getDataSuccess = (data) => {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export const getDataPeopleSuccess = (dataPeople) => {
    return {type: FETCHING_DATA_PEOPLE_SUCCESS, dataPeople}
}

export const getDateFailure = (data) => {
    return {type: FETCHING_DATA_FAILURE}
}

export const fetchData = () => {
    return (dispatch) => {
        
        dispatch(getData())

        fetchSchedule()
        .then(([response, json]) => {
            dispatch(getDataSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}

export const fetchDataActors = () => {
    return (dispatch) => {
        
        dispatch(getData())

        fetchPeople()
        .then(([response, json]) => {
            dispatch(getDataPeopleSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}