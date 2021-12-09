import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; //v9


var firebaseConfig = {
    apiKey: "AIzaSyC8QbUwtlps4fNYkya-SeGjdzf1yUPk-L0",
    authDomain: "image-cloud-1f9b6.firebaseapp.com",
    projectId: "image-cloud-1f9b6",
    storageBucket: "image-cloud-1f9b6.appspot.com",
    messagingSenderId: "741011725549",
    appId: "1:741011725549:web:b3c9ed2c928877f4ad80e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
})

export { projectStorage, projectFirestore, timestamp, provider, auth };