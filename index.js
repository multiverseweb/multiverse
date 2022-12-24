// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  document.getElementById("display").style.color = "black";
document.getElementById("display").style.backgroundColor = "rgb(181, 181, 181)";
   document.getElementsById("display").style.fontWeight = "bold";
document.getElementById("dark").style.display = "none";
    document.getElementById("night").style.display = "flex";
  }

  function darkFunction() {
    document.getElementsByTagName("body").style.backgroundColor= "rgb(20, 20, 20)";
    document.getElementsByTagName("body").style.color = "white";
    document.getElementById("night").style.display = "none";
    document.getElementById("dark").style.display = "flex";
  }
