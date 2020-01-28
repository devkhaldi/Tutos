import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyA0biMeKT-WUZU_yaz2yJDE4PDA-KiqUK0',
  authDomain: 'react-redux-demo-82a5b.firebaseapp.com',
  databaseURL: 'https://react-redux-demo-82a5b.firebaseio.com',
  projectId: 'react-redux-demo-82a5b',
  storageBucket: 'react-redux-demo-82a5b.appspot.com',
  messagingSenderId: '145839518528',
  appId: '1:145839518528:web:ad11b1a8c32865bf9040a5',
  measurementId: 'G-3H1HTLXFZD'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
