const tbody = document.querySelector(".table tbody");
const ordersubTotal = document.querySelector(".order-sub-total");
const tax = document.querySelector(".tax");
tbody.innerHTML = "";
const total = document.querySelector(".total");

let data = getCartItemsFromLocalStorage();

if (!data) {
  var tr = `<tr class="text-center empty-data"><td></td> <td>You have no items in your cart</td> </tr>`;

  tbody.innerHTML += tr;
} else {
  tableRow = data.map((item, i) => {
    var tr = `<tr class="text-center">`;
    tr +=
      `<td>${item.plantName}
  </td>` +
      `<td>
    ${item.price}
    </td>` +
      `<td>${item.quantity}
    </td>` +
      `<td class="delete-item text-dark">
    <i class="fa fa-trash"></i>
     </td></tr>`;
    tbody.innerHTML += tr;
  });
}

// get stored cart items from local storage.
function getCartItemsFromLocalStorage() {
  let storedCartItems = JSON.parse(window.localStorage.getItem("cartItems"));

  return storedCartItems;
}

// calculate total fare
function calculateTotal(data) {
  let subTotal = data.reduce((acc, currValue) => {
    let priceInteger = parseInt(currValue.price.slice(1));
    let accumulatedPrice = priceInteger * currValue.quantity;
    return acc + accumulatedPrice;
  }, 0);
  ordersubTotal.textContent = `\u20AC${subTotal}`; //This \u20AC is the JS equivalent for euro symbol

  let taxTotal = data.reduce((acc, currValue) => {
    let priceInteger = parseInt(currValue.price.slice(1));
    let accumulatedPrice = priceInteger * currValue.quantity;
    return acc + (accumulatedPrice / 100) * 0.1;
  }, 0);
  let approximateTaxTotal = taxTotal.toFixed(2);
  tax.textContent = `\u20AC${approximateTaxTotal}`;

  let overallTotal = (subTotal + taxTotal).toFixed(2);

  total.textContent = overallTotal;
}

calculateTotal(data);

// Todo
// 2. On click of proceed to pay, Check If user is logged in, if user is logged in, if user is not logged in, push them to log in view.
// Use session storage to handle the login process
// 3. Move all css in the html pages to their respective CSS files
// 4. Handle delete button for cart items
// 5. Include cart items logic for outdoor plants and pots

//Todo --> Nnnenna
// 1. Change euro html symbol across the entire app. Use #&#8364; for the symbol
// 2. Wire out the Navbar for other pages using the shop.html navbar
//3. Replace all footers with the new footer
