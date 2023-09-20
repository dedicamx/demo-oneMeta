const predefinedPassword = "$t682E2WGVf35fVGQ*^ZM7Pio";

function checkPassword() {
  const enteredPassword = document.getElementById("password").value;
  const currentTime = new Date().getTime();
  console.log(currentTime);
  const sessionExpirationTime = currentTime + 60 * 1000;

  if (enteredPassword === predefinedPassword) {
    document.getElementById("password-prompt").style.display = "none";
    document.getElementById("app-content").style.display = "block";
    localStorage.setItem(
      "session",
      JSON.stringify({
        username: "guest",
        expirationTime: sessionExpirationTime,
      })
    );
  } else {
    Swal.fire({
      title: "<strong>Incorrect password. </u></strong>",
      icon: "error",
      confirmButtonColor: '#007bff',
    });
  }
}
