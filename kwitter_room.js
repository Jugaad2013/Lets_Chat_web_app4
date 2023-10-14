var firebaseConfig = {
    apiKey: "AIzaSyDp9AcOn-JaeT0iCnwjZEScnyQRL4qeTQE",
    authDomain: "kwitter-e65a8.firebaseapp.com",
    databaseURL: "https://kwitter-e65a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-e65a8",
    storageBucket: "kwitter-e65a8.appspot.com",
    messagingSenderId: "265859040194",
    appId: "1:265859040194:web:b549c6659de610e0844c5b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"  
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}