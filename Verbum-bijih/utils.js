let modalInstance;
function loadingGif(data) {
  modalInstance = Swal.fire({
    title: "Sending...",
    html: "",
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}
function errorFunction() {
  modalInstance = Swal.fire({
    title: "<strong>Data must be filled in.</u></strong>",
    icon: "info",
  });
  document.getElementById("text").style.border = "2px solid red";
}

function splitContent(answer) {
  if (
    JSON.stringify(answer).includes(`I'm sorry, but I can't assist`) ||
    JSON.stringify(answer).includes(
      `The context provided does not contain any information`) ||JSON.stringify(answer).includes(
      `The provided text does not`
    )
  ) {
    modalInstance = Swal.fire({
      title: 'The provided text does not contain enough information.',
      icon: "warning",
    });
    document.getElementById("text").style.border = "2px solid red";
  } else {
    document.getElementById("response").value = JSON.parse(answer)
      ["out-0"].replace("\n", "<br>")
      .replace("<br>", "");
    console.log(answer);
  }
}
