let submit = document.getElementById("submit");
let error = document.getElementById("error");
submit.addEventListener("click", registerUser);
let msg;

function registerUser() {
  // Check if the fields are not empty
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (name !== "" && email !== "" && password !== "") {
    // Create user object
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem("us-lists")) || [];

    const existUser = users.find((u) => u.name === name);
    if (existUser) {
      msg = "this account is already exist! Try Again please ";
      error.innerText = msg;
      return;
    }
    // Add new user to the array
    users.push(user);

    localStorage.setItem("us-lists", JSON.stringify(users));

    // alert("User registered successfully!");
    window.location.replace("../index.html");
  } else {
    alert("Please fill in all fields.");
  }
}
