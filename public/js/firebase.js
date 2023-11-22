let firebaseConfig = {
  apiKey: 'AIzaSyB2xENCq1cJxrrL6rktxhupm340_C0z44Q',
  authDomain: 'another-blog-82721.firebaseapp.com',
  projectId: 'another-blog-82721',
  storageBucket: 'another-blog-82721.appspot.com',
  messagingSenderId: '259963338112',
  appId: '1:259963338112:web:bd013dee767cca52dcd565',
}
// firebase.initializeApp(firebaseConfig)
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore(app)
