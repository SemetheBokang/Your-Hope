const navElement = document.querySelector('.nav');
const hamburgerElement = document.querySelector('.harmburger');

hamburgerElement.addEventListener('click' , ()=>{
    navElement.classList.toggle('nav--open');
})