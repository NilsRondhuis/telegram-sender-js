const TOKEN = "5384425813:AAH2IIKSseN6o86htkf5bmSxai1KCIMCDf0";
const CHAT_ID = "-632052278";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { name, email } = form;
  const data = {
    name: name.value,
    email: email.value,
  };

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${data.name}\n`;
  message += `<b>Почта: </b> ${data.email}`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
