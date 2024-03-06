let submit = document.getElementById("submit");

submit.addEventListener("click", registerUser);

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
      alert("Username already exists. Please choose a different one.");
      return;
    }
    // Add new user to the array
    users.push(user);

    localStorage.setItem("us-lists", JSON.stringify(users));

    // alert("User registered successfully!");
    window.location.reload();
  } else {
    alert("Please fill in all fields.");
  }
}
