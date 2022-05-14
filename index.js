    // Code for the auto Scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

    // Firebase code bloks

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

  import { getFirestore, query, doc, getDoc, setDoc, getDocs, collection,} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_gHE0SpB7Dyvemg4xYPqCU9-ODzJ1E6U",
    authDomain: "smita-astrologer-project.firebaseapp.com",
    projectId: "smita-astrologer-project",
    storageBucket: "smita-astrologer-project.appspot.com",
    messagingSenderId: "916028065983",
    appId: "1:916028065983:web:5feef97f9a243005b9de0a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

    //    Getting References 

let name = document.getElementById('name');
let email = document.getElementById('email');
let PHnumber = document.getElementById('PHnumber');
let message = document.getElementById('message');
    // Adding Documents

    async function AddDocument_CustomID(){

     var serialNo = 0;
     var b = ++serialNo;
      
      var ref = doc(db,"clients",name.value);

      const docRef = await setDoc(
        ref, {
          Sno: serialNo,
          Name: name.value,
          Email: email.value,
          PhoneNumber: PHnumber.value,
          Message: message.value
        }
      )
      .then(()=>{
        alert("Enquiry request sent")
      })
      .catch((error)=>{
        alert(error);
      });
    }
    // Assign event to button
    submit.addEventListener("click", AddDocument_CustomID);
