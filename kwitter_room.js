
var firebaseConfig = {
      apiKey: "AIzaSyB9VB0oR9i4Dv6Wfr6OoRNHy1A4HKR8uUI",
      authDomain: "kwitter-app-d446f.firebaseapp.com",
      databaseURL: "https://kwitter-app-d446f-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-d446f",
      storageBucket: "kwitter-app-d446f.appspot.com",
      messagingSenderId: "365813477777",
      appId: "1:365813477777:web:726361ed4b7e15e281aa30",
      measurementId: "G-5Z01LEENKH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addRoom(){

room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"room_name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      console.log(room_names);
      row="<div class='room_name' id="+room_names+" onclick='redirect(this.id)'>#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;     

      });});}
getData();


function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="login.html";

}
