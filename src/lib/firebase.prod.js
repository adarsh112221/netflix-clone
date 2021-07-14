import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
//we need to somehow seed the database
var config = {
    apiKey: "AIzaSyD6l4d2W9iqRwvmil4hm8dZDKVs91AXx_g",
    authDomain: "netflix-90624.firebaseapp.com",
    projectId: "netflix-90624",
    storageBucket: "netflix-90624.appspot.com",
    messagingSenderId: "826344018337",
    appId: "1:826344018337:web:744a79f656bde00fec3be0"
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
