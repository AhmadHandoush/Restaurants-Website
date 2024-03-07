document.addEventListener("DOMContentLoaded", function () {
  let cards = document.getElementById("cards");
  let buttons = document.getElementById("buttons");
  let searchButton = document.getElementById("search");

  let restaurants = localStorage.getItem("res-lists");
  if (restaurants) {
    var resData = JSON.parse(restaurants);

    // Initial rendering of all restaurants
    renderRestaurants(resData);

    // Event listener for category buttons
    buttons.addEventListener("click", function (event) {
      if (event.target.classList.contains("button-value")) {
        const category = event.target.getAttribute("data-category");
        const filteredRestaurants = filterByCategory(resData, category);
        renderRestaurants(filteredRestaurants);
      }
    });

    // Event listener for search button
    searchButton.addEventListener("click", function () {
      const searchTerm = document
        .getElementById("search-input")
        .value.toLowerCase();
      const filteredRestaurants = filterBySearch(resData, searchTerm);
      renderRestaurants(filteredRestaurants);
    });
  }

  // Function to render restaurants based on data
  function renderRestaurants(restaurants) {
    cards.innerHTML = restaurants
      .map(
        (res) => `<li>
          <div class="card-content">
            <img src="../assests/112-removebg-preview.png" alt="Restaurant Image 3" class="card-image">
            <h2 class="card-title">${res.resName}</h2>
            <p class="card-description">${res.location}</p>
            <p class="card-category">${res.category}</p>
            <button class="card-button"><a>View Item<a/></button>
          </div>
        </li>`
      )
      .join("");
  }

  // Function to filter restaurants based on category
  function filterByCategory(restaurants, category) {
    if (category === "all") {
      return restaurants;
    } else {
      return restaurants.filter(
        (res) => res.category.toLowerCase() === category.toLowerCase()
      );
    }
  }

  // Function to filter restaurants based on search input
  function filterBySearch(restaurants, searchTerm) {
    return restaurants.filter((res) =>
      res.resName.toLowerCase().includes(searchTerm)
    );
  }
});
