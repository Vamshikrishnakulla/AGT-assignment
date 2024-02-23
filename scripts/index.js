// updating the sign-in page
function signIn() {
  let closeElements = document.getElementsByClassName("sign-in-c");
  let openElements = document.getElementsByClassName("sign-in-o");

  for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].style.display = "none";
  }

  for (let i = 0; i < openElements.length; i++) {
    openElements[i].style.display = "block";
  }
}

// updating the sign-up page
function signUp() {
  let closeElements = document.getElementsByClassName("sign-in-o");
  let openElements = document.getElementsByClassName("sign-in-c");

  for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].style.display = "none";
  }

  for (let i = 0; i < openElements.length; i++) {
    openElements[i].style.display = "block";
  }
}
