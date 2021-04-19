import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCfds32l1cwYYNEq-E-CHDeOLr92Ty-RpI",
    authDomain: "smart-car-parking-7d8ed.firebaseapp.com",
    projectId: "smart-car-parking-7d8ed",
    storageBucket: "smart-car-parking-7d8ed.appspot.com",
    messagingSenderId: "40561031504",
    appId: "1:40561031504:web:7670ecfbddc57f982c9455",
    measurementId: "G-B7R735FYTJ"
  };

firebase.initializeApp(config);

export async function signInUser(email:string, pwd:string) {
    
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, pwd);
        console.log (res);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}