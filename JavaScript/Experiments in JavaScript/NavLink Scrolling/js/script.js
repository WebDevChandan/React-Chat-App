const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        let linkId = e.target.getAttribute('href').slice(1),
            linkElement = document.querySelector(`#${linkId}`),
            linkToTop = linkElement.offsetTop;
        window.scrollTo({
          top: linkToTop,
          behavior:'smooth'
        });
    })
})