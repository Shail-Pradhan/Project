// logout.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb1rliS9AVkWtQJlh3rnT8lX2-ZFfTcYg",
    authDomain: "register-app-23f9f.firebaseapp.com",
    projectId: "register-app-23f9f",
    storageBucket: "register-app-23f9f.appspot.com",
    messagingSenderId: "931951763851",
    appId: "1:931951763851:web:156f5fad56cdf476604f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for the logout button
document.getElementById('logout-button').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
        alert('Logout successful!');
        // Redirect to the login page after logout
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
        alert('Logout failed! ' + error.message);
    });
});
