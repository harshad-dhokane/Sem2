
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dob = document.getElementById('dob').value;
    const joiningDate = document.getElementById('joiningDate').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages
    let errors = [];

    const dobDate = new Date(dob);
    const joiningDateDate = new Date(joiningDate);
    const today = new Date();
    const ageInMilliseconds = today.getTime() - dobDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (dobDate >= today) {
       alert("Date of Birth must be before today.");
    }

    if (ageInYears < 20) {
        alert("Employee must be at least 20 years old.");
    }

    if (joiningDateDate <= dobDate) {
        alert("Joining Date must be after Date of Birth.");
    }

    if (ageInYears < 20 && joiningDateDate <= new Date(dobDate.getFullYear() + 20, dobDate.getMonth(), dobDate.getDate())) {
        alert("Joining date must be at least 20 years after the date of birth.");
    }
    

    if (isNaN(salary) || salary < 0) {
        alert("Salary must be a non-negative number.");
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            errorMessages.innerHTML += error + "<br>";
        });
        return; // Stop form submission
    }

    // If no errors, you can proceed with form submission (e.g., AJAX request)
    alert("Registration Successful!");
    document.getElementById('registrationForm').reset();
});
