import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCe_6atHuYsj_ULwE0FPWRorYwx1xCNYzI",
  authDomain: "olxreact-ea706.firebaseapp.com",
  projectId: "olxreact-ea706",
  storageBucket: "olxreact-ea706.appspot.com",
  messagingSenderId: "802773367326",
  appId: "1:802773367326:web:b8db9a3d89b8f76ca8cc0f",
  measurementId: "G-K235VJ6MMZ"
};

export default firebase.initializeApp(firebaseConfig);