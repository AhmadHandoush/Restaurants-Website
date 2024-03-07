let userNumbers = document.getElementById("user-numbers");
let resNumbers = document.getElementById("res-numbers");
let navIcon = document.getElementById("nav-icon");
let sidebar = document.getElementById("sidebar");

let users = localStorage.getItem("us-lists");
if (users) {
  let usersData = JSON.parse(users);
  userNumbers.textContent = `${usersData.length}`;
}

// let restaurants = localStorage.getItem("res-lists");
// if (restaurants) {
//   let resData = JSON.parse(restaurants);
//   resNumbers.textContent = `${restaurants.length}`;
// }
let openSide = () => {
  sidebar.classList.toggle = "open";
};

navIcon.addEventListener("click", openSide);
