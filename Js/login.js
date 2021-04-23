// Todo
// 1. On click of login, Validate username and password inputs
// 2. if validation is passed,save username and password to local storage
// 3. Push user back to the previous route

const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("signIn");
const errorMsg = document.querySelector(".error-msg");
let usernameValidText = document.querySelector(".username-valid-text");
let passwordValidText = document.querySelector(".password-valid-text");

function saveToSessionStorage() {
  const passwordValue = password.value;
  const usernameValue = username.value;
  let user = {
    username: usernameValue,
    password: passwordValue,
  };
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("isValidUser", JSON.stringify(true));
}

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

loginBtn.addEventListener("click", (e) => {
  const passwordValue = password.value;
  const usernameValue = username.value;

  e.preventDefault();
  if (validateLogin(usernameValue, passwordValue)) {
    saveToSessionStorage();

    window.history.back();
    // window.location.href = "index.html";
  }
});
