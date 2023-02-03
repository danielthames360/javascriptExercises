const messageBox = document.getElementById("messageBox");
const inputMessage = document.querySelector(".input");

let debounce = null;

//! Without Debounce
// inputMessage.addEventListener("input", ({ target }) => {
//   messageBox.textContent = target.value;
// });

const onInputChange = ({ target }) => {
  if (debounce) clearTimeout(debounce);

  debounce = setTimeout(() => {
    console.log("hola");
    messageBox.textContent = target.value;
  }, 1500);
};

//* With Debounce
inputMessage.addEventListener("input", onInputChange);
