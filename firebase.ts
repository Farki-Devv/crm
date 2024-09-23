// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAnYDSGm9fMTbddFKAOCBF4slJTi05pvRk',
	authDomain: 'crm-test-1fb8f.firebaseapp.com',
	projectId: 'crm-test-1fb8f',
	storageBucket: 'crm-test-1fb8f.appspot.com',
	messagingSenderId: '203707783123',
	appId: '1:203707783123:web:6308e0cdf628b5a39e8126',
	measurementId: 'G-NTMM59GQZD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
