const form = document.querySelector(".contact");

function sendMessage(e) {
  e.preventDefault(); // verhindert dass das HTML bestimmte Aktionen durchführt -> Konkret (Formfeld wird vom JS durchgeführt)
  
  const nameInput = document.getElementById("name");
  const emailFrom = document.getElementById("mail");
  const mailTo = document.getElementById("mailTo")
  const msg = document.getElementById("textareaDiv");


  Email.send({
    SecureToken: "d34e93b7-cb59-4ed0-8f7b-6cc67b8d03bb",
    To: mailTo.value,
    From: emailFrom.value,
    Subject: "Kontaktformular Webseite",
    Body: msg.value,
  }).then((message) => alert(message));
}

form.addEventListener("submit", sendMessage)

//password:  EFF79B6F16EAE9DFAD4B74E07921C7772B41
// security token: ab71f3a8-777d-42e2-9b12-cf9e329ea5e8
// security token2: d34e93b7-cb59-4ed0-8f7b-6cc67b8d03bb
