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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    } else {
        alert("not logged in")
        window.location.href = "./login.html"
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "./login.html"
    }).catch((error) => {
    });
}