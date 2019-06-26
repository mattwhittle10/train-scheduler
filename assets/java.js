var firebaseConfig = {
    apiKey: "AIzaSyC4Oc7Dd5MVN7PffvSJIKFk22aVmK98-6w",
    authDomain: "project-1-2d96f.firebaseapp.com",
    databaseURL: "https://project-1-2d96f.firebaseio.com",
    projectId: "project-1-2d96f",
    storageBucket: "project-1-2d96f.appspot.com",
    messagingSenderId: "503367967991",
    appId: "1:503367967991:web:9fa40a2605e4cada"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var name = "";
  var destination = "";
  var frequency = "";
  var arrivalTime;
  var minutesArrival = (arrivalTime - time);
  var time = "";
  time = moment().format('HHmm');
      console.log(time)

  $(document).ready(function(){
    $("#currentTime").append(moment().format('HH:mm'));
    $("#currentArrival1").append(+time + +15);
    $("#currentArrival2").append(+time + +10);
    $("#currentArrival3").append(+time + +8);
    $("#currentArrival4").append(+time + +20);
    $("#currentArrival5").append(+time + +26);
  });
  
  //function to update page real time for any database changes
  database.ref().on("value", function(snapshot){
    $("#submitBtn").click(function(event){
      $("#trainTable").empty();
      event.preventDefault();
      

      name = $("#nameVal").val().trim();
      destination = $("#destinationVal").val().trim();
      frequency = $("#frequencyVal").val().trim();
      arrivalTime = $("#arrivalTimeVal").val().trim();
      minutesArrival = arrivalTime - time;
        

      database.ref().set({
        name: name,
        destination: destination,
        frequency: frequency,
        arrivalTime: arrivalTime,
        minutesArrival: (arrivalTime - time)
      });
    console.log(name + destination + frequency + arrivalTime);
  
  
  database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().arrivalTime);
    console.log(snapshot.val().minutesArrival);

    $("#trainTable").html('<td>'+ name + '</td><td>'+ destination + '</td><td>'+ frequency + '</td><td>'+ arrivalTime + '</td><td>' + snapshot.val().minutesArrival + '</td>')
    // function clear() {
    //   $("#nameVal").val('');
    //   $("#destinationVal").val('');
    //   $("#frequencyVal").val('');
    //   $("#arrivalTimeVal").val('');
      
    // }clear();
    

  });
  });
});