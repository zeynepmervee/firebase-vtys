// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uuR8b3876Pq6HBKRHw8duPyPXUZQ2C0",
  authDomain: "fir-giriscikis.firebaseapp.com",
  projectId: "fir-giriscikis",
  storageBucket: "fir-giriscikis.firebasestorage.app",
  messagingSenderId: "134285846287",
  appId: "1:134285846287:web:23a25df42c663f06e2007a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
window.register = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Registration successful: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
}

window.login = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}

window.logout = function() {
  auth.signOut()
    .then(() => {
      alert("Logout successful");
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
}