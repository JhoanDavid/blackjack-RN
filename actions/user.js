import Firebase, { db } from '../Firebase';
const firebase = require('firebase'); 
import {FACEBOOK_APP_ID} from 'react-native-dotenv'
import * as Facebook from 'expo-facebook'


// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const LOGIN_FACEBOOK = 'LOGIN_FACEBOOK'

// actions

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

			dispatch(getUser(response.user.uid))
		} catch (e) {
			alert(e)
		}
	}
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()

			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email
				}

				db.collection('users')
					.doc(response.user.uid)
					.set(user)

				dispatch({ type: SIGNUP, payload: user })
			}
		} catch (e) {
			alert(e)
		}
	}
}

export const loginFacebook = () => {
	return async (dispatch) => {
		try {
			dispatch({type: LOADING})
			await Facebook.initializeAsync({appId: FACEBOOK_APP_ID});
			const { type, token } = await Facebook.logInWithReadPermissionsAsync({permissions: ['public_profile', 'email'],})
			
			if (type == 'success') {			
				
				const credential = firebase.auth.FacebookAuthProvider.credential(token);
				await firebase.auth().signInWithCredential(credential);
				const user = {
					email : firebase.auth().currentUser.providerData[0].email,
					uid : firebase.auth().currentUser.providerData[0].uid
				}

				db.collection('users')
					.doc(user.uid)
					.set(user);
				alert('Logged in! \n' + "Hola: " + user.email );	
				dispatch({ type: LOGIN_FACEBOOK, payload:getUser("prueba") });
																			  
			}
		} catch (e) {			
			dispatch({type: LOGIN_FAILED})
			alert('ERROR ',e)
		}
	}
}