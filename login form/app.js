const firebaseConfig = {
    apiKey: "AIzaSyBobeY0nh7Tdj0zhuxspHq8CC5yR749BLE",
    authDomain: "huraira-f168c.firebaseapp.com",
    projectId: "huraira-f168c",
    storageBucket: "huraira-f168c.appspot.com",
    messagingSenderId: "722273410727",
    appId: "1:722273410727:web:10b43735c12738119a0582",
    measurementId: "G-EVM9Q47VXZ"
};

firebase.initializeApp(firebaseConfig)


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function signUp(event) {
    event.preventDefault()
    console.log("run");
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
     alert("signup successful")
    })
    .catch((error) => {
        console.log(error);
    });
}


function login(event) {
    event.preventDefault()
    console.log("run");
    let email = document.querySelector("#email-login").value
    let password = document.querySelector("#password-login").value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
     alert("login successful")
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error.message);
    });
}
