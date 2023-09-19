const predefinedPassword = "$t682E2WGVf35fVGQ*^ZM7Pio";

function checkPassword() {
  const enteredPassword = document.getElementById("password").value;

  if (enteredPassword === predefinedPassword) {
    document.getElementById("password-prompt").style.display = "none";
    document.getElementById("app-content").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
