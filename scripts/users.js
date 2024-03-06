let table = document.getElementById("userTable");

let users = localStorage.getItem("us-lists");
if (users) {
  var usersData = JSON.parse(users);
  usersData.forEach((user) => {
    let row = document.createElement("tr");
    let userPlace = document.createElement("td");
    let emailPlace = document.createElement("td");
    let passwordPlace = document.createElement("td");

    userPlace.textContent = user.name;
    emailPlace.textContent = user.email;
    passwordPlace.textContent = user.password;

    row.appendChild(userPlace);
    row.appendChild(emailPlace);
    row.appendChild(passwordPlace);

    // Append the row to the table
    table.appendChild(row);
  });
}
