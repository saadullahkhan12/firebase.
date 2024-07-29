// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth,
     onAuthStateChanged, 
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword ,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXkniKthG95Jsvt-UfR2Y4DT4uhFZ9S9Y",
    authDomain: "ecommercemyweb.firebaseapp.com",
    projectId: "ecommercemyweb",
    storageBucket: "ecommercemyweb.appspot.com",
    messagingSenderId: "406837013072",
    appId: "1:406837013072:web:069aee407f494eee21ff55",
    measurementId: "G-W936WQR4SW"
};
const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_btn = document.getElementById("signup_btn")
signup_btn.addEventListener("click", createUserAccount)


const  auth_container= document.getElementById("auth_container")
const user_container = document.getElementById("user_container")


const signin_email = document.getElementById("signin_email")
const signin_password = document.getElementById("signin_password")
const signin_btn = document.getElementById("signin_btn")
signin_btn.addEventListener("click",signin)


const user_email = document.getElementById("user_email")
const logout_btn = document.getElementById("logout_btn")
logout_btn.addEventListener("click",logout)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is here ");
        const uid = user.uid;
        auth_container.style.display="none";
        user_container.style.display="block";
        user_email.innerText=user.email
        // ...
    } else {
        console.log("user is not here ");
        auth_container.style.display="block";
        user_container.style.display="none";
        
    }
});
function createUserAccount() {
    
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
        .then((userCredential) => {
            const user = userCredential.user;
           
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

        });
}

function signin() {
    

    signInWithEmailAndPassword(auth, signin_email.value,signin_password.value )
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log("user");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}


function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
    
}
