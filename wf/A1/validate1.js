function validateForm() {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let age = document.getElementById("age").value;

            let firstNameError = document.getElementById("firstNameError");
            let lastNameError = document.getElementById("lastNameError");
            let ageError = document.getElementById("ageError");

            firstNameError.textContent = "";
            lastNameError.textContent = "";
            ageError.textContent = "";

            let isValid = true;

            if (!/^[a-zA-Z]+$/.test(firstName)) {
                firstNameError.textContent = "First name must contain only alphabets.";
                isValid = false;
            }

            if (!/^[a-zA-Z]+$/.test(lastName)) {
                lastNameError.textContent = "Last name must contain only alphabets.";
                isValid = false;
            }

            if (isNaN(age) || age < 18 || age > 50 || age == "") {
                ageError.textContent = "Age must be a number between 18 and 50.";
                isValid = false;
            }
            return isValid; // Very important: Return the isValid value
        }
        function validateAndSubmit(){
            if(validateForm()){
                alert("Registration Successful")
                return false;
            }
            else{
                return false;
            }
        }
