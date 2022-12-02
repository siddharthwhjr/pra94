// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjk5qcWNl0GpH05HBNtoh8oUovGg6MjHY",
    authDomain: "kwitter-83624.firebaseapp.com",
    databaseURL: "https://kwitter-83624-default-rtdb.firebaseio.com",
    projectId: "kwitter-83624",
    storageBucket: "kwitter-83624.appspot.com",
    messagingSenderId: "1011717511704",
    appId: "1:1011717511704:web:2b4dc9bff4308189fbc16d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
 

function adduser(){
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
//ADD YOUR FIREBASE LINKS