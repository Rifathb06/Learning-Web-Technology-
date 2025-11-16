function validateEmail() {
 let email = document.getElementById('email').value.trim();
 let error = "";
 if (email.length === 0) {
   error = "Email cannot be empty.";
 } else {
   let at = email.indexOf('@');
   let dot = email.lastIndexOf('.');
   // Must have @ and .
   if (at < 1 || dot < at + 2 || dot === email.length - 1) {
     error = "Email must be like anything@example.com";
   }
 }
 document.getElementById('emailError').innerText = error;
 return error === "";
}