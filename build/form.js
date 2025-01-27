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
let completionMessage = document.getElementById("completionMessage");
const form = document.getElementById("container");

//ERROR TAGS
const errorName1 = document.getElementById("error1");
const errorName2 = document.getElementById("error2");
const emailError = document.getElementById("emailError");
const queryError = document.getElementById("queryError");
const smsError = document.getElementById("smsError");
const clickError = document.getElementById("clickError");

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
  if (radio1.checked || radio2.checked) {
    myCheckBox();
    queryError.innerText = "";
    radio1Container.style.borderColor = "green";
    radio2Container.style.borderColor = "green";
  } else {
    queryError.innerText = "Please select a query type";
    radio1Container.style.borderColor = "red";
    radio2Container.style.borderColor = "red";
  }
  if (message.value == "") {
    smsError.innerText = "This field is required";
    message.style.borderColor = "red";
  } else {
    smsError.innerText = "";
    message.style.borderColor = "green";
  }
  if (checkBox.checked) {
    console.log("nicely done!");
    clickError.innerText = "";
    setTimeout(() => {
      completionMessage.style.display = "block";
    }, 2000);
  } else {
    clickError.innerText =
      "to submit this form please consent to being contacted";
  }
});

function myCheckBox() {
  radio1.onclick = () => {
    radio2.disabled = true;
    radio1Container.style.borderColor = "green";
  };
  radio2.onclick = () => {
    radio1.disabled = true;
    radio2Container.style.borderColor = "green";
  };
  radio1.ondblclick = () => {
    radio1.checked = false;
    radio2.disabled = false;
    radio1Container.style.borderColor = "grey";
  };

  radio2.ondblclick = () => {
    radio2.checked = false;
    radio1.disabled = false;
    radio2Container.style.borderColor = "grey";
  };
}
myCheckBox();
