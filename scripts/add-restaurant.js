let add = document.getElementById("add");
const menus = [
  [
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
  ],
  [
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
  ],
  [
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
    {
      name: "pizza",
      description: "ahmad",
      price: "123",
      image: "../assests/restaurant_1.jpeg",
    },
  ],
];
add.addEventListener("click", addRestaurant);

function addRestaurant(menus) {
  // Get values from inputs
  let resName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let location = document.getElementById("location").value;
  let category = document.getElementById("category").value;
  let image = document.getElementById("image").value;

  let vegan = menus[0];
  let italian = menus[1];
  let lebanese = menus[2];

  let resMenu;
  if (category == "italian") {
    resMenu = italian;
  } else if (category == "lebanese") {
    resMenu = lebanese;
  } else if (category == "vegan") {
    resMenu = vegan;
  }
  // Create an object to store the user data
  let restaurant = {
    resName: resName,
    email: email,
    number: number,
    location: location,
    category: category,
    image: image,
    resMenu: resMenu,
  };

  // Retrieve existing user data from local storage
  let existingRestaurant = JSON.parse(localStorage.getItem("res-lists")) || [];

  existingRestaurant.push(restaurant);

  localStorage.setItem("res-lists", JSON.stringify(existingRestaurant));

  window.location.reload();
}
