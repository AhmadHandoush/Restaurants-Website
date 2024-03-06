let submit = document.getElementById("submit");

function registerUser() {
  // Get values from inputs
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Create an object to store the user data
  let userData = {
    name: name,
    email: email,
    password: password,
  };

  // Retrieve existing user data from local storage
  let existingUsers = JSON.parse(localStorage.getItem("us-lists")) || [];

  existingUsers.push(userData);

  localStorage.setItem("us-lists", JSON.stringify(existingUsers));

  window.location.reload();
}
