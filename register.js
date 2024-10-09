import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDb1rliS9AVkWtQJlh3rnT8lX2-ZFfTcYg",
    authDomain: "register-app-23f9f.firebaseapp.com",
    projectId: "register-app-23f9f",
    storageBucket: "register-app-23f9f.appspot.com",
    messagingSenderId: "931951763851",
    appId: "1:931951763851:web:156f5fad56cdf476604f8e"
  };


const app = initializeApp(firebaseConfig);
const database =  getDatabase(app);
const auth = getAuth();

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Register the user
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            sendEmailVerification(user)
                .then(() => {
                    alert("Registration successful! Please check your email to verify your account.");
                    console.log('User registered:', user);
                    set(ref(database, 'users/' + user.uid),{
                        email: email
                    })
                    window.location.href = "index.html";
                    registerForm.reset();
                })
                .catch((error) => {
                    console.error("Error sending verification email: ", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
