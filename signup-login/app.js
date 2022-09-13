
// ============================ modal =====================================

let popup = document.getElementById("popup");


function openpage() {
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password1").value;
  var cPassword = document.getElementById("ConfirmPassword").value;
  var address = document.getElementById("address").value;
  var phoneNum = document.getElementById("Phone").value;
  var postalCode = document.getElementById("Postalcode").value;
  var dateofbirth = document.getElementById("dateofbirth").value;
  var gender = document.getElementById("gender").value;
  var profilePic = document.getElementById("ProfilePicture").value;

  if (userName === "") {
    document.getElementById('validation1').innerHTML = "This field is required";
  }

  if (email === "") {
    document.getElementById('validation2').innerHTML = "This field is required";
  }

  if (password === "") {
    document.getElementById('validation3').innerHTML = "This field is required";
  }

  if (cPassword === "") {
    document.getElementById('validation4').innerHTML = "This field is required";
  }

  if (address === "") {
    document.getElementById('validation5').innerHTML = "This field is required";
  }

  if (phoneNum === "") {
    document.getElementById('validation6').innerHTML = "This field is required";
  }

  if (postalCode === "") {
    document.getElementById('validation7').innerHTML = "This field is required";
  }

  if (dateofbirth === "") {
    document.getElementById('validation8').innerHTML = "This field is required";
  }

  if (gender === "") {
    document.getElementById('validation9').innerHTML = "This field is required";
  }

  if (profilePic === "") {
    document.getElementById('validation10').innerHTML = "This field is required";
  }
  else {
    popup.classList.add("open-page");

    
    localStorage.setItem("userName1", userName);
    localStorage.setItem("email1", email);
    localStorage.setItem("password11", password);
    localStorage.setItem("confirmPassword1", cPassword);
    localStorage.setItem("address1", address);
    localStorage.setItem("phoneNum1", phoneNum);
    localStorage.setItem("postalCode1", postalCode);
    localStorage.setItem("dateofbirth1", dateofbirth);
    localStorage.setItem("gender1", gender);
    localStorage.setItem("profilePic1", profilePic);
  }
  // popup.classList.add("open-page");






}

function closepage() {
  popup.classList.remove("open-page")
}

// ==================================================================================






