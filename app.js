const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
