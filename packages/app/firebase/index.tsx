// Libs:
import { initializeApp } from 'firebase/app'
import { initializeAuth, onAuthStateChanged, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDdLWFN8IibyCfYfVMpKyaEyTB0gT5rD_I',
  authDomain: 'arquers-app.firebaseapp.com',
  projectId: 'arquers-app',
  storageBucket: 'arquers-app.appspot.com',
  messagingSenderId: '476842563234',
  appId: '1:476842563234:web:8900ea54b871e6b77969fb',
  measurementId: 'G-YTR3NYWFNY',
}

// Initialize Firebase Envs
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKETt,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app)
const db = getFirestore()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onAuthStateChangedFunc = (callback: any) => {
  return onAuthStateChanged(auth, callback)
}

export { onAuthStateChangedFunc as onAuthStateChanged, app, auth, db }
