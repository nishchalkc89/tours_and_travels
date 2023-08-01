const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrolly > 0);
})

let menu = document.queryselection ('#menu icon');
let navbaru = document.queryselection('.navbar');

menu.onclick = () => {
    menu. classlist.toggle ('bx-x');
    navbar.classlist.toggle('open');
};
window.onscroll= () => {
  menu.classlist.remove('bx-x');
  navbar.classlist.remove('open');
};