async function query(data) {
  document.getElementById("text").value ? loadingGif(data) : errorFunction();
  const response = await fetch(
    "https://www.stack-inference.com/run_deployed_flow?flow_id=64e129bad97081da614b9e7d&org=bf58ceee-e9bc-4f8b-9675-d4a90250141d",
    {
      headers: {
        Authorization: "Bearer e465342b-5731-4e66-829b-223a86d5ce3b",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  modalInstance.close();
  const result = await response.json();
  return result;
}

function send() {
  const text = document.getElementById("text").value;
  console.log("Sending...");

  query({"in-0": `Read this text, which is a conversation, do a summary, write the sentiment analysis and detect the following:
    Nature and impact of sexual harassment
    Sexism
    Bullying
    Exclusion
    Racism
    Homophobia
    Strengths of workplace culture
    Respect and inclusion
    Reporting process
    Awareness of initiatives to prevent – address bullying, sexual harassment, discrimination
    Effectiveness and Impact of initiatives.
    Then Provide Recommendations for change`,
    "indoc-1": text,
  }).then((response) => {
    splitContent(JSON.stringify(response));
    console.log(JSON.stringify(response));
  });
}

document.getElementById("btn").addEventListener("click", send);
