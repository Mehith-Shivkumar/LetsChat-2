// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCFgyiMIgrZQiOikSABY5xFeSr6eJx3lPs",
      authDomain: "letschat-app-4cf0b.firebaseapp.com",
      projectId: "letschat-app-4cf0b",
      storageBucket: "letschat-app-4cf0b.appspot.com",
      messagingSenderId: "559987712549",
      appId: "1:559987712549:web:efebbe4c308e4347e9d5cc"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     //End code
     });});}
getData();
