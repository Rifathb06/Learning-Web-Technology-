function validateBloodGroup() {
 var bg = document.getElementById('bloodgroup').value;
 var error = "";
 if (bg === "") {
   error = "Blood group must be selected.";
 }
 document.getElementById('bloodErr').innerText = error;
 return error === "";
}