// Todo
// 1. On click of login, Validate username and password inputs
// 2. if validation is passed,save username and password to local storage
// 3. Push user to the Homepage

const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("signIn");
const errorMsg = document.querySelector(".error-msg");
let usernameValidText = document.querySelector(".username-valid-text");
let passwordValidText = document.querySelector(".password-valid-text");

console.log("password", password.value);

function saveToSessionStorage() {
  const passwordValue = password.value;
  const usernameValue = username.value;
  console.log(usernameValue, passwordValue);
}

function validateLogin(usernameVal, passwordVal) {
  console.log("password", passwordVal);

  if (
    (usernameVal !== "user" && usernameVal) ||
    (passwordVal !== "user" && passwordVal)
  ) {
    errorMsg.textContent = "Your username or password is not correct.";
  } else if (passwordVal === "") {
    console.log("empty");
    passwordValidText.textContent = "Please input your password";
    errorMsg.textContent = "";
  } else if (passwordVal !== "") {
    passwordValidText.textContent = "";
  } else if (usernameVal !== "user" || passwordVal !== "user") {
    errorMsg.textContent = "Your username or password is not correct.";
  }
}

loginBtn.addEventListener("click", (e) => {
  const passwordValue = password.value;
  const usernameValue = username.value;

  e.preventDefault();
  validateLogin(usernameValue, passwordValue);
  // saveToSessionStorage();
});
