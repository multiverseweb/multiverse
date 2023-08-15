const fade = () => {
  const wrapper =
    document.querySelector('.wrapper');
  wrapper.classList.add('fade');
};
window.addEventListener('load', fade);


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    document.getElementById("rocket").style.bottom= "170vh";
    document.getElementById("flame").style.bottom= "140vh";
    document.getElementById("flame").style.opacity="1";
  }
  else{
    document.getElementById("rocket").style.bottom="0vh";
    document.getElementById("flame").style.bottom="-25vh";
    document.getElementById("flame").style.opacity="0.1";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  document.getElementById("ss").style.filter = "invert(1)";
  document.getElementById("building").style.filter = "invert(1)";
  document.getElementById("glass").style.background = "rgba(244, 244, 244, 0.275)";
  document.getElementById("glass1").style.background = "rgba(244, 244, 244, 0.275)";
  document.getElementById("glass2").style.background = "rgba(244, 244, 244, 0.275)";
  document.getElementById("glass3").style.background = "rgba(244, 244, 244, 0.275)";
  document.getElementById("glass4").style.background = "rgba(244, 244, 244, 0.275)";
  document.getElementById("display").style.color = "black";
  document.getElementById("display").style.backgroundColor = "rgb(181, 181, 181)";
  document.getElementById("dark").style.display = "none";
  document.getElementById("night").style.display = "flex";
}

function darkFunction() {
  document.getElementById("ss").style.filter = "invert(0)";
  document.getElementById("building").style.filter = "invert(0)";
  document.getElementById("glass").style.background = "rgba(200,200,200, 0.1)";
  document.getElementById("glass1").style.background = "rgba(200,200,200, 0.1)";
  document.getElementById("glass2").style.background = "rgba(200,200,200, 0.1)";
  document.getElementById("glass3").style.background = "rgba(200,200,200, 0.1)";
  document.getElementById("glass4").style.background = "rgba(200,200,200, 0.1)";
  document.getElementById("display").style.backgroundColor = "rgb(7,7,7)";
  document.getElementById("display").style.color = "white";
  document.getElementById("night").style.display = "none";
  document.getElementById("dark").style.display = "flex";
}

function cpyFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the link: " + copyText.value);
}


function showText() {
  document.getElementById('imgtext').style.display = "block";
}

function hideText() {
  document.getElementById('imgtext').style.display = "none";
}




//=========================================================
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


window.onscroll = function () {
  scrollFunction()
};

/*=================================================================================================*/
