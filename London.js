document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.querySelector(".input-field");
    const passwordInput = document.querySelector('.password-field');
    const usernameMessage = document.querySelector('.username-validation');
    const passwordMessage = document.querySelector('.password-validation');
    
    const loginButton = document.getElementById('login-button');
    const modal = document.getElementById('mymodal');
    const closeButton = document.getElementById('close-button');
    const createAccountLink = document.getElementById('message-a');

    function applyValidationClasses(input, isValid) {
        input.classList.remove('input-error', 'input-valid');
        input.classList.add(isValid ? 'input-valid' : 'input-error');
    }

    function validateUsername() {
        const username = usernameInput.value;
        // Username must be 12 characters or more based on your logic, or adjust condition if it should be max length
        if (username.length < 12) {
            usernameMessage.textContent = 'Username length must be < 12';
            usernameMessage.className = 'username-validation error-color';
            applyValidationClasses(usernameInput, false);
            return false; // Username is invalid ❌
        } else {
            usernameMessage.textContent = 'Username length is valid';
            usernameMessage.className = 'username-validation success-color';
            applyValidationClasses(usernameInput, true);
            return true;  // Username is valid ✅
        }
    }

    function validatePassword() {
        const password = passwordInput.value; // Fixed: correctly reading value from password input
        if (password.length < 8) {
            passwordMessage.textContent = 'Password length must be < 8';
            passwordMessage.className = 'password-validation error-color';
            applyValidationClasses(passwordInput, false);
            return false; // Password is invalid ❌
        } else {
            passwordMessage.textContent = 'Password length is valid';
            passwordMessage.className = 'password-validation success-color';
            applyValidationClasses(passwordInput, true);
            return true;  // Password is valid ✅
        }
    }

    usernameInput.addEventListener('input', validateUsername);
    passwordInput.addEventListener('input', validatePassword);

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        // If both inputs are valid, open the success modal
        if (isUsernameValid && isPasswordValid) {
            modal.style.display = 'block';
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    createAccountLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('You will be redirected to the account creation page.');
    });
});
