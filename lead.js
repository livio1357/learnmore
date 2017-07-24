 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAuh1CkbdWlWckl2-XD2kqLWQnHJluPBzE",
    authDomain: "codemoji-4be7d.firebaseapp.com",
    databaseURL: "https://codemoji-4be7d.firebaseio.com",
    projectId: "codemoji-4be7d",
    storageBucket: "codemoji-4be7d.appspot.com",
    messagingSenderId: "1030571752058"
  };
  firebase.initializeApp(config);




var database = firebase.database();


var name = ""; 
var school = "";

var email = "";

var comments = "";

var phone = [];





// currentTime




database.ref().on("child_added", function(snapshot) {

	






	// moment().subtract(currentTime, firstTime)

// adding to the dom
$('#user-data').append('<tr><td>'+snapshot.val().name+'</td><td>'+snapshot.val().school+'</td><td>'+snapshot.val().comments+'</td><td>'+snapshot.val().email+'</td><td>'+snapshot.val().phone+'</td></tr>')
});




//dealing with the data in the form and going to the database
$("#submit").on("click", function(event){
	event.preventDefault();


	name = $("#name").val().trim();
		school = $("#school").val().trim();
		email = $("#email").val().trim();
		comments = $("#comments").val().trim();
		phone = $("#phone").val().trim();



	database.ref().push({
name: name,
school: school,
email: email,

comments: comments,
phone: phone,


})

$('#name').val('');
$('#school').val('');
$('#email').val('');
$('#comments').val('');
$('#phone').val('');


});


