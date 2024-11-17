document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();


  const firstNamePart = firstName.slice(0, 3).toLowerCase();
  const lastNamePart = lastName.slice(0, 5).toLowerCase();


  const email = `${lastNamePart}${firstNamePart}@fit.cvut.cz`;


  document.getElementById('result').textContent = `Vaše e-mailová adresa je: ${email}`;
});
