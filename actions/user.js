import Firebase, { db } from '../Firebase'
import { FacebookAuthProvider } from "firebase/firebase-auth";
import {FACEBOOK_APP_ID, FACEBOOK_APP_NAME} from 'react-native-dotenv'
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
				console.log("login con faceobook")
				console.log(FACEBOOK_APP_ID);
				await Facebook.initializeAsync({appId: FACEBOOK_APP_ID});
				console.log(Facebook);
				console.log("pasó por el await")
				const { type, token } = await Facebook.logInWithReadPermissionsAsync({permissions: ['public_profile'],})
				console.log("token "+ token)
				
				if (type == 'success') {
				console.log("entro al succes");
				var provider = new  FacebookAuthProvider()
				
				provider.addScope('public_profile');
				console.log(provider);
				//console.log(Firebase);
					//await Firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
						
		  			const credential = new Firebase.auth.FacebookAuthProvider.credential(token)
					console.log(credential)
					Firebase.auth().signInWithCredential(credential)
					const facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
					dispatch({ type: LOGIN_FACEBOOK, payload: facebookProfileData })
					  
				}
			} catch (e) {
				alert(e)
			}
		}
	}

/* 	export const login = () => {
		return async (dispatch, getState) => {
			try {
				const { email, password } = getState().user
				const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
	
				dispatch(getUser(response.user.uid))
			} catch (e) {
				alert(e)
			}
		}
	} */
/* 
	async loginWithFacebook() {

		//ENTER YOUR APP ID 
		const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('<APP ID>', { permissions: ['public_profile'] })
	
		if (type == 'success') {
	
		  const credential = firebase.auth.FacebookAuthProvider.credential(token)
	
		  firebase.auth().signInWithCredential(credential).catch((error) => {
			console.log(error)
		  })
		}
	  } */
