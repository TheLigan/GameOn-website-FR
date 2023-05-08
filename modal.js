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

function firstValid() {
  if (firstName.value.length === '' || firstName.value.length < 2) {
    document.getElementById("first").style.border="2px solid red";
    document.getElementById("firstError").style.opacity="1";
    return false;
  } 
  else {
    document.getElementById("first").style.border="2px solid green";
    document.getElementById("firstError").style.opacity="0";
    return true;
  }

}

function lastValid() {
  if (lastName.value.length === '' || lastName.value.length < 2) {
    document.getElementById("last").style.border="2px solid red";
    document.getElementById("lastError").style.opacity="1";
    return false;
  } 
  else {
    document.getElementById("last").style.border="2px solid green";
    document.getElementById("lastError").style.opacity="0";
    return true;
  }

}

function emailValid() {
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) === false) {
    document.getElementById("email").style.border="2px solid red";
    document.getElementById("emailError").style.opacity="1";
    return false;
  } 
  else {
    document.getElementById("email").style.border="2px solid green";
    document.getElementById("emailError").style.opacity="0";
    return true;
  }

}

function birthdateValid() {
  let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (birthdate.value === '' && regexBirthdate.test(birthdate.value) === false) {
    document.getElementById("birthdate").style.border="2px solid red";
    document.getElementById("birthdateError").style.opacity="1";
    return false;
  } 
  else {
    document.getElementById("birthdate").style.border="2px solid green";
    document.getElementById("birthdateError").style.opacity="0";
    return true;
  }

}

function quantityValid() {
  let regexQuantity = /^[0-9]{1,2}$/;
  if (regexQuantity.test(quantity.value) === false) {
    document.getElementById("quantity").style.border="2px solid red";
    document.getElementById("quantityError").style.opacity="1";
    return false;
  } 
  else {
    document.getElementById("quantity").style.border="2px solid green";
    document.getElementById("quantityError").style.opacity="0";
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
    document.getElementById("checkboxError").style.opacity="0";
    return true;
  } else {
    document.getElementById("checkboxError").style.opacity="1";
    return false;
    
  }
}

function conditionsValid() {
  if (conditions.checked) {
    document.getElementById("conditionsError").style.opacity="0";
    return true;
  }
  else {
  document.getElementById("conditionsError").style.opacity="1";
  return false;
}  
    
}