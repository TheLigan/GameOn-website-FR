function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCls = document.querySelectorAll(".close");
const confirmCls = document.querySelectorAll(".btn-confirm");
const form = document.getElementById('form');
const firstName = document.getElementById ("first");
const lastName = document.getElementById ("last");
const email = document.getElementById ("email");
const birthdate = document.getElementById ("birthdate");
const quantity = document.getElementById('quantity');
const checkboxes = document.querySelectorAll(".checkbox-input");
const conditions = document.getElementById('checkbox1');
const checkError = document.getElementById('checkboxError');
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));
confirmCls.forEach((cls) => cls.addEventListener("click", closeConfirmation));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function closeConfirmation() {
  modalbg.style.display = "none";
}

// modal check and validation

form.addEventListener('submit', function(e) {
  if (validate() === false) {
  e.preventDefault();}
  else{
    e.preventDefault();
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  }
});


function validate () {
  firstValid();
  lastValid();
  emailValid();
  birthdateValid();
  quantityValid();
  checkboxValid()
   if (
    firstValid() &&
    lastValid() &&
    emailValid() &&
    birthdateValid() &&
    quantityValid() &&
    checkboxValid() &&
    conditionsValid() === true) {
    return true;
  }
  else {
    return false;
  }
}

function error(element, message) {
  const formData = element.parentElement;
  const displayError = formData.querySelector(".error");
  displayError.innerHTML = message;
  formData.classList.add("error");
  formData.classList.remove("success");
}

function success(element) {
  const formData = element.parentElement;
  const displayError = formData.querySelector(".error");
  displayError.innerHTML = "";
  formData.classList.add("success");
  formData.classList.remove("error");
}

function firstValid() {
  if (firstName.value.length === '' || firstName.value.length < 2) {
    error(firstName, "veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  } 
  else {
    success(firstName);
    return true;
  }

}

function lastValid() {
  if (lastName.value.length === '' || lastName.value.length < 2) {
    error(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  } 
  else {
    success(lastName);
    return true;
  }

}

function emailValid() {
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) === false) {
    error(email, "Veuillez entrer un email valide.");
    return false;
  } 
  else {
    success(email);
    return true;
  }

}

function birthdateValid() {
  let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (birthdate.value === '' && regexBirthdate.test(birthdate.value) === false) {
    error(birthdate, "Vous devez entrer votre date de naissance.");
    return false;
  } 
  else {
    success(birthdate);
    return true;
  }

}

function quantityValid() {
  let regexQuantity = /^[0-9]{1,2}$/;
  if (regexQuantity.test(quantity.value) === false) {
    error(quantity, "Veuillez entrer un nombre valide.");
    return false;
  } 
  else {
    success(quantity);
    return true;
  }

}

function checkboxValid() {
  let isChecked = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == "radio" && checkboxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (isChecked) {
    success(checkError)
    return true;
  } else {
    error(checkError, "Vous devez choisir une option.");
    return false;
    
  }
}

function conditionsValid() {
  const conditionsE = document.getElementById("conditionError");
  if (conditions.checked) {
    success(conditionsE);
    return true;
  }
  else {
  error(conditionsE, "Vous devez vérifier que vous acceptez les termes et conditions.");
  return false;
}  
    
}