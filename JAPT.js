const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


var slideImg =document.getElementById("slideImg");
var images= new Array(
  "images/shutterstock_605382959-min (1).jpg",
  "images/croppedImg_517764178.jpeg",
  "images/shutterstock_510619435.jpg",
  "images/tran13.jpg",
  "images/plastic-surgery (1).jpg"
  
);

var len=images.length;
var i=0;

function slider(){
  if(i>len-1){
    i=0;
  }
  slideImg.src=images[i];
  i++;
  setTimeout('slider()',3000)
}