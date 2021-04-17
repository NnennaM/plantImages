const tbody = document.querySelector(".table tbody");
tbody.innerHTML = "";

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

// Todo
// 1. Add Proceed to pay button under card display
// 2.
