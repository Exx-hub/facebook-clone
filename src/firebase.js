// const firebaseConfig = {
// 	apiKey: "AIzaSyBpl0-fCEZGG4vIU4rdqhPswwHffOOwRn4",
// 	authDomain: "facebook-clone-3a5d4.firebaseapp.com",
// 	databaseURL: "https://facebook-clone-3a5d4.firebaseio.com",
// 	projectId: "facebook-clone-3a5d4",
// 	storageBucket: "facebook-clone-3a5d4.appspot.com",
// 	messagingSenderId: "1098367540039",
// 	appId: "1:1098367540039:web:f7e8cd9000a152e5bd0a62",
// 	measurementId: "G-T4QB26XGSC",
// };

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBpl0-fCEZGG4vIU4rdqhPswwHffOOwRn4",
	authDomain: "facebook-clone-3a5d4.firebaseapp.com",
	databaseURL: "https://facebook-clone-3a5d4.firebaseio.com",
	projectId: "facebook-clone-3a5d4",
	storageBucket: "facebook-clone-3a5d4.appspot.com",
	messagingSenderId: "1098367540039",
	appId: "1:1098367540039:web:f7e8cd9000a152e5bd0a62",
	measurementId: "G-T4QB26XGSC",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

const auth = firebase.auth();

// used for google login
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
