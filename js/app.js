
let menuOpen = false;

function toggleMenu() {
 if(!menuOpen) { // open the menu
   $('nav').animate({
     right: 0
   }, 420, 'swing');
 }
 else { // close the menu
   $('nav').animate({
     right: -200
   }, 360, 'swing');
 }
 menuOpen = !menuOpen; // flips the state
} // toggleMenu()