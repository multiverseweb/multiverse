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
  document.getElementById("display").style.color = "black";
  document.getElementById("display").style.backgroundColor = "rgb(181, 181, 181)";
  document.getElementById("display").style.fontWeight = "bold";
  document.getElementById("dark").style.display = "none";
  document.getElementById("night").style.display = "flex";
  }

  function darkFunction() {
    document.getElementsByTagName("body").style.backgroundColor= "rgb(7,7,7)";
    document.getElementByTagName("body").style.color = "white";
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
