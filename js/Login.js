let form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");
  let msg;
  e.preventDefault();

  if (name === "foodieRAL2728@gmail.com" && password === "SEF27foodie28") {
    window.location.replace("../pages/admin.html");
  } else {
    const users = JSON.parse(localStorage.getItem("us-lists")) || [];

    // Find user with matching username and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      window.location.replace("../pages/Home.html");
    } else {
      msg = "wrong pass or email please try again!";
      error.innerText = msg;
    }
  }
});
