const submitButton = document.getElementById("submitBtn");

// Event handler for form submission
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Access form elements
  let nombreHeures = parseFloat(document.getElementById("Nombreheures").value);
  let nombreStaff = parseFloat(document.getElementById("Nombrestaff").value);
  let coutHeure = parseFloat(document.getElementById("Costheure").value);
  let coutFixe = parseFloat(document.getElementById("Costfixe").value);
  let contingence = parseFloat(document.getElementById("Contingence").value);

  // Calculate the total cost
  let totalCost = coutFixe + (nombreHeures * nombreStaff * coutHeure) * ((contingence / 100) + 1);

  // Display the result
  document.getElementById("Costprojet").innerHTML = totalCost + " $"; // Ensure proper addition
});
