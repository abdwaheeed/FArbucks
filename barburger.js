const menuToggle = document.querySelector('.burger input');
const nav = document.querySelector('.header .navigation');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
})