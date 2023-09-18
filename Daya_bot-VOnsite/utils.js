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
      `The context provided does not contain enough information to create a summar`
    )
  ) {
    modalInstance = Swal.fire({
      title: JSON.parse(answer)["out-0"],
      icon: "warning",
    });
    document.getElementById("text").style.border = "2px solid red";
  } else {
    document.getElementById("cards").style.display = "flex";
    const test2 = JSON.stringify(answer)
      .replaceAll("\\n", "")
      .replaceAll("\\", "")
      .replaceAll('"', "")
      .replaceAll("{", "")
      .replaceAll("}", "")
      .replaceAll("\\n", "")
      .replaceAll("nn", "");

    let summaryIndex = test2.indexOf("Summary:");
    let sentimentIndex = test2.indexOf("Sentiment Analysis:");
    let tweetsIndex = test2.indexOf("Tweets:");
    let blogPostIndex = test2.indexOf("Blog Post Entry:");

    document.getElementById("summary").innerHTML = test2
      .slice(summaryIndex, sentimentIndex)
      .replace("Summary:", "");

    document.getElementById("sentiment").innerHTML = test2
      .slice(sentimentIndex, tweetsIndex)
      .replace("Sentiment Analysis:", "");

    document.getElementById("tweet").innerHTML = test2
      .slice(tweetsIndex, blogPostIndex)
      .replace("Tweets:", "");

    document.getElementById("blog").innerHTML = test2
      .slice(blogPostIndex)
      .replace("Blog Post Entry:", "");
  }
}
