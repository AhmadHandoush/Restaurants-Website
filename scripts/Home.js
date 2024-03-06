let cards = document.getElementById("cards");

let restaurants = localStorage.getItem("res-lists");
if (restaurants) {
  var resData = JSON.parse(restaurants);

  cards.innerHTML = `
  ${resData
    .map(
      (res) => `<li>
  //     <div class="card-content">
  //       <img src="../assests/112-removebg-preview.png" alt="Restaurant Image 3" class="card-image">
  //       <h2 class="card-title">${res.resName} 3</h2>
  //       <p class="card-description">${res.location}</p>
  //       <p class="card-category">${res.category}</p>
  //       <button class="card-button"><a>view item<a/></button>
  //     </div>
  //   </li>`
    )
    .join("")}
`;
}
