let cartBadge = document.querySelector(".cart-badge");
let cartBadgeContent = parseInt(cartBadge.textContent);
let product = document.querySelector(".product-content");
const cartClickIcons = document.querySelectorAll(".cart-click-icon");

console.log("cartClickIcons", cartClickIcons);

// On load event listener function that is fired
// as soon as all the page contents is loaded.

window.addEventListener("load", (event) => {
  let numberOfItems = JSON.parse(window.localStorage.getItem("numberOfItems"));
  if (!numberOfItems) {
    cartBadge.textContent = 0;
  } else {
    cartBadge.textContent = numberOfItems;
  }

  // set the textContent of the cart to the current number of items in
  // in local storage
});

// event listener function to get selected plant name,
// price, afterwhich the incrementCartItems function is
// called.

for (let i = 0; i < cartClickIcons.length; i++) {
  cartClickIcons[i].addEventListener("click", (e) => {
    let selectedPlant =
      e.currentTarget.parentElement.parentElement.parentElement.lastElementChild
        .firstElementChild.firstElementChild.textContent;

    console.log("selectedPlant", selectedPlant);
    let selectedPlantPrice =
      e.currentTarget.parentElement.parentElement.parentElement.lastElementChild
        .lastElementChild.textContent;
    console.log("selectedPlantPrice", selectedPlantPrice);

    incrementCartItems(selectedPlant, selectedPlantPrice);
  });
}

function incrementCartItems(plantName, price) {
  let numberOfItems = JSON.parse(window.localStorage.getItem("numberOfItems"));
  //   cartBadgeContent++; //This increments the cart count
  cartBadge.textContent = numberOfItems + 1;

  //store in local storage
  let cartItemsObj = {
    quantity: 1,
    plantName,
    price,
  };

  storeCartItemsInLocalStorage(plantName, cartItemsObj);
}

function storeCartItemsInLocalStorage(plantName, cartItemsObj) {
  // first get previously stored cart items in local storage
  let storedCartItems = JSON.parse(window.localStorage.getItem("cartItems"));

  // create variable to hold new items in the array
  let cartItemsArr = [];
  if (storedCartItems && storedCartItems.length > 0) {
    cartItemsArr = storedCartItems;

    // Check if there is a similar item in local storage
    const similarCartItem = cartItemsArr.some((item) => {
      if (item.plantName === plantName) {
        item.quantity++;
      }
      return item.plantName === plantName;
    });
    // If there is no similar item, push new item to the cartItems array
    if (!similarCartItem) {
      cartItemsArr.push(cartItemsObj);
    }
  } else {
    cartItemsArr.push(cartItemsObj);
  }

  // add items quantity to get number of items selected
  let numberOfItems = cartItemsArr.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0
  );

  console.log(numberOfItems);
  //     cartItemsArr.forEach((item, index) => {
  //       console.log("item", item);
  //       if (item.plantName !== plantName) {
  //         item.quantity++;
  //       } else {
  //         cartItemsArr.push(cartItemsObj);
  //       }
  //       //   if (item.plantName !== plantName) {
  //       //     cartItemsArr.push(cartItemsObj);
  //       //   }
  //     });
  //   } else {
  //     cartItemsArr.push(cartItemsObj);
  //   }

  // Store cartItemsArr in local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
  localStorage.setItem("numberOfItems", JSON.stringify(numberOfItems));
}
