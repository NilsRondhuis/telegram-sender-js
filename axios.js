const TOKEN = "5384425813:AAH2IIKSseN6o86htkf5bmSxai1KCIMCDf0";
const CHAT_ID = "-632052278";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");
form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();
  const title = document.querySelector(".title");

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Почта: </b> ${this.email.value}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "html",
    })
    .then((res) => {
      if (res.data.ok) {
        title.textContent = "Сообщение отправлено";
        title.classList.add("success");
      }
    })
    .catch((err) => {
      title.textContent = "Сообщение не отправлено";
      title.classList.add("error");
    });

  e.target.reset();
}
