import firebase from 'firebase'
import 'firebase/firestore'
import {
	API_KEY,
	AUTH_DOMAIN,
	DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
	MESSAGE_SENDER_ID,
	APP_ID
} from 'react-native-dotenv'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey:API_KEY,
    authDomain:AUTH_DOMAIN,
    databaseURL:DATABASE_URL,
    projectId:PROJECT_ID,
    storageBucket:STORAGE_BUCKET,
    messagingSenderId:MESSAGE_SENDER_ID,
    appId:APP_ID
};

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase