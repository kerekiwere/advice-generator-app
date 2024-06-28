const id = document.getElementById("id");
const advice = document.getElementById("advice");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  getQuote();
});

function getQuote() {
  const url = "https://api.adviceslip.com/advice";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API request failed");
      }
    })
    .then((data) => {
      id.innerHTML = data.slip.id;
      typewriter(data.slip.advice);
    })
    .catch((error) => {
      console.log(error);
    });
}
getQuote();

function typewriter(text) {
  advice.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      advice.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}
