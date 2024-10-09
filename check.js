import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
    setTimeout(() => {  // Simulate a delay for loading
        const loading = document.getElementById('loading');
        const mainContent = document.getElementById('main-content');

        if (user) {
            loading.style.display = 'none';
            mainContent.style.display = 'block';
            console.log("User is signed in:", user);
        } else {
            window.location.href = "login.html";
        }
    }, 1000);
});
