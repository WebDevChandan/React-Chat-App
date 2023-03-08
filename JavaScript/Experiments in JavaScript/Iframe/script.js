const btn = document.querySelector('.btn'),
  webFrame = document.querySelector('iframe');

btn.addEventListener('click', () => {
  webFrame.setAttribute("src", "https://www.w3schools.com");
  btn.innerHTML = `<i>Loading...</i>`;

  btn.classList.add('btnExStyle');

  webFrame.onload = function (event) {
    btn.classList.add('btnHide');
  };
  setTimeout(() => {
    btn.classList.add('btnHide');
  }, 1000);
});
