/* Navigeringsmeny*/

/* Bredden av menyn ska vara 25vw */
function openNav() {
  document.getElementById("mySidenav").style.width = "25vw";
}

/* Bredden av menyn ska vara 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/*Bildspel*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); /* Byt bild varannan sekund*/
}
