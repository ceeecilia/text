var firebaseConfig = {
  apiKey: "AIzaSyAlLr0SEjmil71k9Do16Qy1vVnZcLFdHks",
  authDomain: "lets-chat-webapps.firebaseapp.com",
  databaseURL: "https://lets-chat-webapps-default-rtdb.firebaseio.com",
  projectId: "lets-chat-webapps",
  storageBucket: "lets-chat-webapps.appspot.com",
  messagingSenderId: "568572406373",
  appId: "1:568572406373:web:378d26094b931774dc748c"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() 
{ 
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name:" + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}