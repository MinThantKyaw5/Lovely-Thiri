const yesBtn = document.querySelector(".yes__btn");
const noBtn = document.querySelector(".no__btn");

noBtn.addEventListener("click", () => {
  noBtn.style.position = "absolute";
  let i = Math.floor(Math.random() * 420) + 1;
  let j = Math.floor(Math.random() * 205) + 1;
  noBtn.style.top = `${i}px`;
  noBtn.style.left = `${j}px`;
});

yesBtn.addEventListener("click", () => {
  location.href = "second_index.html";
});