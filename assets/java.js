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
  var name = [];
  var destination = [];
  var frequency = [];
  var arrivalTime = [];
  var minutesArrival = [];

  //function to update page real time for any database changes
  database.ref().on("value", function(snapshot){

  })