const tbody = document.querySelector(".table tbody");
const ordersubTotal = document.querySelector(".order-sub-total");
const tax = document.querySelector(".tax");
tbody.innerHTML = "";
const total = document.querySelector(".total");
const paybtn = document.querySelector(".pay-btn");
let cartBadge = document.querySelector(".cart-badge");
let storedQuantity;
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

  storedQuantity = JSON.parse(window.localStorage.getItem("numberOfItems"));

  cartBadge.textContent = storedQuantity;

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

//  On click of proceed to pay button, Check If user is logged in, if user is logged in, if user is not logged in, push them to log in view.
paybtn.addEventListener("click", () => {
  let isValidUser = JSON.parse(sessionStorage.getItem("isValidUser"));

  let successPaymentHtml = `<div><h2 class="text-center text-success"> Congratulations</h2> <p class="text-center">You have successfully made your payment.</p></div>`;

  let notLoggedInPaymentHtml = `<div>
          <h6 class="text-center">Oh Oh, It appears you're not logged in.</h6>
          <p class="text-center">Please log in to complete this payment.</p>
           <div class="d-flex justify-content-center">
              <a class="btn btn-success btn-secondary" href="login.html">Login in</a>
           </div>`;

  //check if user is logged in
  if (isValidUser) {
    $("#payModal").modal("show");
    $(".modal-body").html(successPaymentHtml);
  } else {
    $("#payModal").modal("show");
    $(".modal-body").html(notLoggedInPaymentHtml);
  }
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    let plantName =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent;

    let quantity = e.target.parentElement.previousElementSibling.textContent;
    deleteCartItem(plantName.trim(), quantity);
  }
});

function deleteCartItem(plantName, quantity) {
  let filteredData = data.filter((item) => item.plantName !== plantName);

  let updatedQuantity = storedQuantity - quantity;

  localStorage.setItem("cartItems", JSON.stringify(filteredData));

  localStorage.setItem("numberOfItems", updatedQuantity);

  window.location.reload();
}

// Todo

// 3. Move all css in the html pages to their respective CSS files

//Todo --> Nnnenna
// 1. Change euro html symbol across the entire app. Use #&#8364; for the symbol
// 2. Wire out the Navbar for other pages using the shop.html navbar
//3. Replace all footers with the new footer
