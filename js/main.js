let userEmail = "";

function getStarted() {
  document.getElementById("welcome-content").style.display = "none";
  document.getElementById("create-account-content").style.display = "block";
  document.getElementById("image").src = "./imgs/1.jpeg";
  clearInputs();
}

function showAlert(message) {
  document.getElementById("alert").style.display = "block";
  document.getElementById("alert-data").innerHTML = message;
}

function clearInputs() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
}

function checkValidCreds() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (!(username.length > 5) || !(username.length <= 15)) {
    showAlert("User Name must be between 5-15 characters");
    return false;
  } else if (!email.includes("@")) {
    showAlert("Email must include @ symbol");
    return false;
  } else if (password.length < 5) {
    showAlert("Weak password");
    return false;
  } else if (confirmPassword != password) {
    showAlert("Passwords must match");
    return false;
  }

  userEmail = email;
  return true;
}

function createAccount() {
  if (checkValidCreds()) {
    document.getElementById("create-account-content").style.display = "none";
    document.getElementById("success-content").style.display = "block";
    document.getElementById("user-email").innerHTML = userEmail;
    document.getElementById("image").src = "./imgs/3.jpeg";
  }
}

function backToHome() {
  document.getElementById("welcome-content").style.display = "block";
  document.getElementById("success-content").style.display = "none";
  document.getElementById("image").src = "./imgs/2.jpeg";
}
