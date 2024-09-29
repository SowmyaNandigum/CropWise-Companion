
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBvNXJZRZ0Vn6HDqvCmxMSLqv3NMYiJg0E",
    authDomain: "agribro-ca712.firebaseapp.com",
    databaseURL: "https://agribro-ca712-default-rtdb.firebaseio.com",
    projectId: "agribro-ca712",
    storageBucket: "agribro-ca712.appspot.com",
    messagingSenderId: "582212674532",
    appId: "1:582212674532:web:ec9fac4ccc92f586e39df1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    const user = result.user;
    console.log(user);
    window.location.href=" ";
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    
  });
  })