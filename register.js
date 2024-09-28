// register.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

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

// Event listener for the registration form submission
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User created:', user);
            alert('User successfully registered!');
            // Optionally, redirect to another page or update the UI
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            alert(errorMessage); // Show error message to the user
        });
});
