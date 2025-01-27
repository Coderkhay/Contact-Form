const submitBtn = document.getElementById("submit");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let radio1Container = document.getElementById("radio1Container");
let radio2Container = document.getElementById("radio2Container");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let message = document.getElementById("message");
let checkBox = document.getElementById("check");

//ERROR TAGS
const errorName1 = document.getElementById("error1");
const errorName2 = document.getElementById("error2");
const emailError = document.getElementById("emailError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value == "" || lastName.value == "") {
    errorName1.innerText = "Please write your name";
    firstName.style.borderColor = "red";
    errorName2.innerText = "Please write your name";
    lastName.style.borderColor = "red";
  } else {
    errorName1.innerText = "";
    firstName.style.borderColor = "green";
    errorName2.innerText = "";
    lastName.style.borderColor = "green";
  }
  if (email.value == "") {
    emailError.innerText = "Please enter a valid email";
    email.style.borderColor = "red";
  } else {
    emailError.innerText = "";
    email.style.borderColor = "green";
  }
});

function myCheckBox() {
  radio1.onclick = (e) => {
    e.checked = true;
    radio2.disabled = true;
    e.ondblclick = (e2) => {
      e2.checked = false;
      radio2.checked = true;
    };
  };
}
myCheckBox();
