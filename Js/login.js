// Query the needed elements from the DOM
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("signIn");
const errorMsg = document.querySelector(".error-msg");
let usernameValidText = document.querySelector(".username-valid-text");
let passwordValidText = document.querySelector(".password-valid-text");

// Store user details in session storage.
// Session storage was used to store the user details
// so as to simulate a typical user login scenario.
// The user details would be cleared once the browser window
// is closed.
function saveToSessionStorage() {
  const passwordValue = password.value; // Get the password input value
  const usernameValue = username.value; // Get the username input value

  // The user object holds the username and password
  let user = {
    username: usernameValue,
    password: passwordValue,
  };

  // Store the user object in session storage.
  // Also store a boolean variable that identifies if the user is
  // logged in.
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("isValidUser", JSON.stringify(true));
}

// Login validation function
function validateLogin(usernameVal, passwordVal) {
  let isValid = true;

  if (
    (usernameVal !== "" && usernameVal !== "user") ||
    (passwordVal !== "" && passwordVal !== "pass")
  ) {
    errorMsg.textContent = "Your username or password is not correct.";
    isValid = false;
  } else {
    errorMsg.textContent = "";
  }
  if (usernameVal === "") {
    usernameValidText.textContent = "Please input your username";
    errorMsg.textContent = "";
    isValid = false;
  } else {
    usernameValidText.textContent = "";
  }
  if (passwordVal === "") {
    passwordValidText.textContent = "Please input your password";
    errorMsg.textContent = "";
    isValid = false;
  } else {
    passwordValidText.textContent = "";
  }

  return isValid;
}

//  On click of login, Validate username and password inputs
//  if validation is passed,save username and password to local storage
//  Push user back to the previous route
loginBtn.addEventListener("click", (e) => {
  const passwordValue = password.value;
  const usernameValue = username.value;

  e.preventDefault(); //prevent the default of behaviour of the form
  if (validateLogin(usernameValue, passwordValue)) {
    saveToSessionStorage();

    window.history.back();
  }
});
