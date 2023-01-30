
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBvYlqqf-PTN0342QsKUOY4fiXGaBPnNFI",
  authDomain: "linkedin-clone-1daa4.firebaseapp.com",
  projectId: "linkedin-clone-1daa4",
  storageBucket: "linkedin-clone-1daa4.appspot.com",
  messagingSenderId: "815746186455",
  appId: "1:815746186455:web:62ad2aec1a0a878ee84492"
};

 const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);

 
 export {db, firebaseApp}; 
