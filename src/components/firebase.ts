// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavzZw1RCLBmuWwwkwgmK_Cti9A6vZnQo",
  authDomain: "login-auth-a6fbd.firebaseapp.com",
  projectId: "login-auth-a6fbd",
  storageBucket: "login-auth-a6fbd.appspot.com",
  messagingSenderId: "448621350889",
  appId: "1:448621350889:web:fe080a651d34626f7d8578"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;