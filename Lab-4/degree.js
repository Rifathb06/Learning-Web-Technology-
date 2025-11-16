function validateDegree() {
 let checkboxes = document.getElementsByName('degree');
 let error = "At least one must be selected.";
 for (let i = 0; i < checkboxes.length; i++) {
   if (checkboxes[i].checked) {
     error = "";
     break;
   }
 }
 document.getElementById('degreeError').innerText = error;
 return error === "";
}