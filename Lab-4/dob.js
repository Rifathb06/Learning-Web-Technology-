function validateDOB() {
 let dd = document.getElementById('dd').value.trim();
 let mm = document.getElementById('mm').value.trim();
 let yyyy = document.getElementById('yyyy').value.trim();
 let error = "";
 if (!dd || !mm || !yyyy) {
   error = "Day, Month, Year cannot be empty.";
 } else {
   let ndd = Number(dd);
   let nmm = Number(mm);
   let nyyyy = Number(yyyy);
   if (isNaN(ndd) || isNaN(nmm) || isNaN(nyyyy)) {
     error = "Day, Month, Year must be numbers.";
   } else if (ndd < 1 || ndd > 31 || nmm < 1 || nmm > 12 || nyyyy < 1900 || nyyyy > 2016) {
     error = "Date out of valid range: dd 1-31, mm 1-12, yyyy 1900-2016.";
   }
 }
 document.getElementById('dobError').innerText = error;
 return error === "";
}