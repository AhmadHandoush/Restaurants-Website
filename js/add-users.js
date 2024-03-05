var name = document.getElementById("name").value;
let email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var submit = document.getElementById("submit");

function registerUser() {
  // Get values from inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Create an object to store the user data
  var userData = {
    name: name,
    email: email,
    password: password,
  };

  // Retrieve existing user data from local storage
  var existingUsers = JSON.parse(localStorage.getItem("us-lists")) || [];

  // Add new user data to the existing array
  existingUsers.push(userData);

  // Save updated user data to local storage
  localStorage.setItem("us-lists", JSON.stringify(existingUsers));

  window.location.reload();
}
