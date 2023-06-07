//create an object constructor for User
function User(email, password, fname, lname, age, address, phone, payment) {
  this.email = email;
  this.password = password;
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.address = address;
  this.phone = phone;
  this.payment = payment;
}
//get the inputs from the HTML using jQuery
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFname = $("#txtFname");
let inputLname = $("#txtLname");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhone = $("#txtPhone");
let inputPayment = $("#txtPayment");

//create the register function
function register() {
  //create a newUser
  let newUser = new User(
    inputEmail.val(),
    inputPassword.val(),
    inputFname.val(),
    inputLname.val(),
    inputAge.val(),
    inputAddress.val(),
    inputPhone.val(),
    inputPayment.val()
  );
  saveUser(newUser); // this function is under storeManager
}
//display the user on the console
function init() {
  //hook events
  $("#btnAdd").click(register);
  $("input").on("mouseover", function () {
    $(this).css({ "background-color": "#dedede" });
  });
  $("input").on("mouseleave", function () {
    $(this).css({ "background-color": "white" });
  });
  $("header").on("mouseover", function () {
    $("main").css({ "background-color": "blue" });
  });
}

window.onload = init;

//*******HINT: add the onclick event on the button (register.html)
