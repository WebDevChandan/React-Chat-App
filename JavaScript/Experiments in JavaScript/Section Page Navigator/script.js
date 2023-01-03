/*
["#home", "#about", "#resume", "#services", "#portfolio", "#testimonial", "#contact"]
*/
const arr = [
  "#home",
  "#about",
  "#resume",
  "#services",
  "#portfolio",
  "#testimonial",
  "#contact",
];
const lftArw = document.querySelector(".leftArrow"),
  rhtArw = document.querySelector(".rightArrow"),
  msg = document.querySelector("#message");

let i = 0;

rhtArw.addEventListener("click", (e) => {
  e.preventDefault();
  if (i === arr.length - 1) return 0;
  i++;

  rhtArw.setAttribute("href", arr[i]);
  msg.innerText = arr[i];
});

lftArw.addEventListener("click", (e) => {
  e.preventDefault();
  if (i === 0) return 0;
  i--;

  lftArw.setAttribute("href", arr[i]);
  msg.innerText = arr[i];
});
