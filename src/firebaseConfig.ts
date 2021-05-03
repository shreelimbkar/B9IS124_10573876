import firebase from 'firebase';

import { toast } from './components/helpers/toast'

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

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                resolve(user);
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export async function signInUser(email:string, pwd:string) {
    
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, pwd);
        console.log (res);
        return true;
    } catch (e) {
        console.log(e);
        toast(e.message, 4000)
        return false;
    }
}

export async function registerUser(email:string, pwd:string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, pwd)
        console.log (res);
        return true;
    } catch (e) {
        console.log(e);
        toast(e.message, 4000)
        return false;
    }
}