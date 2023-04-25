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
const form = document.getElementById('form');
const firstName = document.getElementById ("first");
const lastName = document.getElementById ("last");
const email = document.getElementById ("email");
const birthdate = document.getElementById ("birthdate");
const quantity = document.getElementById('quantity');
const checkboxes = document.querySelectorAll(".checkbox-input");
const conditions = document.getElementById('checkbox2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// modal check and validation

form.addEventListener('submit', function(e) {
  if (validate() === false) {
  e.preventDefault();}
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
    alert ('Merci ! Votre réservation a été reçue.');
    return true;
  }
  else {
    return false;
  }
}

function firstValid() {
  if (firstName.value.length === '' || firstName.value.length < 2) {
    alert ('Veuillez entrer au moins deux caracteres');
    return false;
  } 
  else {
    return true;
  }

}

function lastValid() {
  if (lastName.value.length === '' || lastName.value.length < 2) {
    alert ('Veuillez entrer au moins deux caracteres');
    return false;
  } 
  else {
    return true;
  }

}

function emailValid() {
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) === false) {
    alert ('Cet Email est invalide');
    return false;
  }
  else {
    return true;
  }

}

function birthdateValid() {
  let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (birthdate.value === '' && regexBirthdate.test(birthdate.value) === false) {
    alert ('Entrez une date de naissance valide');
    return false;

  } else {
    return true;
  }
}

function quantityValid() {
  let regexQuantity = /^[0-9]{1,2}$/;
  if (regexQuantity.test(quantity.value) === false) {
    alert ('entrez une quantité valide');
    return false;
  } else {
    return true;
  }
}

function checkboxValid() {
  let isChecked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == "radio" && checkboxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (isChecked) {
    return true;
  } else {
    alert ('veuillez selectionner une ville');
    return false;
    
  }
}

function conditionsValid() {
  if (conditions.checked === true) {
    return true;
  }
  else {
  alert ('Vous devez acceptez les termes et conditions.');
  return false;
}  
    
}