function validateGender() {
 let radios = document.getElementsByName('gender');
 let error = "At least one must be selected.";
 for (let i = 0; i < radios.length; i++) {
   if (radios[i].checked) {
     error = "";
     break;
   }
 }
 document.getElementById('genderError').innerText = error;
 return error === "";
}