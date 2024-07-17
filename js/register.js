import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import{getFirsetore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIrisBU-Hw0Eqror6X-BB_nud5_6Bqtac",
  authDomain: "nadarty-optics.firebaseapp.com",
  projectId: "nadarty-optics",
  storageBucket: "nadarty-optics.appspot.com",
  messagingSenderId: "904952129601",
  appId: "1:904952129601:web:0bf8b6fc7c2c42a0367ec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();




const signUp = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const names = document.getElementById('names').value;
  const tel = document.getElementById('tel').value;

  const auth=getAuth();
  const db=getFirsetore();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    const user=userCredential.user;
    const userData={
      email : email,
      password : password,
      tel :  tel,
      names : names
    };
    showmessage('Account Created Successfully')
    const docref=(db, "users", user.uid);
    setDoc(docref, userData)
    .then(()=>{
    })
  })

})