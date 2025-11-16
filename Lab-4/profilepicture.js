function validateProfile() {
 let userId = document.getElementById('userid').value.trim();
 let pic = document.getElementById('picture').value;
 let error = "";
 if (userId === "") {
   error = "UserId cannot be empty.";
 } else {
   let num = Number(userId);
   if (isNaN(num) || num <= 0) {
     error = "UserId must be a positive number.";
   }
 }
 if (error === "" && pic === "") {
   error = "Picture cannot be empty.";
 }
 document.getElementById('proError').innerText = error;
 return error === "";
}