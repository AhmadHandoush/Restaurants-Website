let userNumbers = document.getElementById("user-numbers");

let users = localStorage.getItem("us-lists");
if (users) {
  let usersData = JSON.parse(users);
  userNumbers.textContent = `${usersData.length}`;
}
