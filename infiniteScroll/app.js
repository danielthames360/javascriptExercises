const content = document.getElementById("content");
const container = document.querySelector(".container");
let counter = 1;
const getElements = () => {
  const arr = Array.from({ length: 30 }, () => counter++);
  for (let i = 0; i < arr.length; i++) {
    const link = document.createElement("li");
    link.textContent = `${arr[i]}: Hello world`;
    content.appendChild(link);
  }
};
getElements();
container.addEventListener("scroll", () => {
  if (
    container.scrollTop + container.clientHeight + 1 >=
    container.scrollHeight
  ) {
    getElements();
  }
});
