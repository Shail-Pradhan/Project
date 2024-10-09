import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDb1rliS9AVkWtQJlh3rnT8lX2-ZFfTcYg",
    authDomain: "register-app-23f9f.firebaseapp.com",
    projectId: "register-app-23f9f",
    storageBucket: "register-app-23f9f.appspot.com",
    messagingSenderId: "931951763851",
    appId: "1:931951763851:web:156f5fad56cdf476604f8e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('logout-button').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
        alert('Logout failed! ' + error.message);
    });
});
