const fade = () => {
  const wrapper =
  document.querySelector('.wrapper');
  wrapper.classList.add('fade');
};
window.addEventListener('load',fade);


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
	  document.getElementById("glass").style.background = "rgba(44, 44, 44, 0.745)";
  document.getElementById("glass1").style.background = "rgba(44, 44, 44, 0.745)";
  document.getElementById("glass2").style.background = "rgba(44, 44, 44, 0.745)";
  document.getElementById("glass3").style.background = "rgba(44, 44, 44, 0.745)";
  document.getElementById("glass4").style.background = "rgba(44, 44, 44, 0.745)";
  document.getElementById("heading").style.background = "rgba(24, 24, 24, 0.745)";
  document.getElementById("navbar").style.background = "rgba(24, 24, 24, 0.745)";
  document.getElementById("display").style.color = "white";
document.getElementById("country").style.color = "black";
document.getElementById("country2").style.color = "black";
  document.getElementById("display").style.backgroundColor = "rgb(181, 181, 181)";
  document.getElementById("dark").style.display = "none";
  document.getElementById("night").style.display = "flex";
  }

  function darkFunction() {
	  document.getElementById("glass").style.background = "rgba(200,200,200, 0.1)";
	  document.getElementById("glass1").style.background = "rgba(200,200,200, 0.1)";
	  document.getElementById("glass2").style.background = "rgba(200,200,200, 0.1)";
	  document.getElementById("glass3").style.background = "rgba(200,200,200, 0.1)";
	  document.getElementById("glass4").style.background = "rgba(200,200,200, 0.1)";
	  document.getElementById("heading").style.background = "rgb(143, 143, 143, 0.174)";
	  document.getElementById("navbar").style.background = "rgb(143, 143, 143, 0.174)";
    document.getElementById("display").style.backgroundColor= "rgb(7,7,7)";
    document.getElementById("display").style.color = "white";
    document.getElementById("night").style.display = "none";
    document.getElementById("dark").style.display = "flex";
document.getElementById("country").style.color = "white";
document.getElementById("country2").style.color = "white";
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
