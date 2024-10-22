// .querySelector searches for and selects the first element in a document that matches the given tag in the parenthesis
// here, we're just assignment variables to each of the sections in the page

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');

  // This calls the previous .open attribute called in css
  // allows the hamburger menu to be toggled on or off
  navlist.classList.toggle('open')
}