// Todo
// 1. On click of login, Validate email and password inputs
// 2. if validation is passed,save email and password to local storage
// 3. Push user to the Homepage

const email = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("signIn");

function saveToSessionStorage() {
  let emailValue = email.value;
  let passwordValue = password.value;
  console.log(emailValue, passwordValue);
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveToSessionStorage();
});
