const submitButton = document.getElementById("submitBtn");

// Event handler for form submission
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Access form elements
  let nombreHeures = document.getElementById("Nombreheures").value;
  let nombreStaff = document.getElementById("Nombrestaff").value;
  let coutHeure = document.getElementById("Costheure").value;
  //let coutMateriaux = document.getElementById("Costmateriaux").value;
  let contingence = document.getElementById("Contingence").value;

  // Process the data (you can perform calculations or other actions here)
  document.getElementById("Costprojet").innerHTML = ((nombreHeures*(nombreStaff*coutHeure))*((contingence/100)+1)+" $");

});