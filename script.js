document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  
    if (name.length < 5) {
      nameError.textContent = 'Name must be at least 5 characters long';
    }
  
    if (!email.includes('@')) {
      emailError.textContent = 'Enter a valid email address';
    }
  
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
      phoneError.textContent = 'Enter a valid 10-digit phone number';
    }
  
    if (password.length < 8 || password === 'password' || password === name) {
      passwordError.textContent = 'Password must be at least 8 characters long and not be "password" or the user\'s name';
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
    }
  
    // If no errors, the form can be submitted
    if (!nameError.textContent && !emailError.textContent && !phoneError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
      // You can submit the form or perform other actions here
      alert('Form submitted successfully!');
      // document.getElementById('validationForm').submit(); // Uncomment this line to submit the form
    }
  });
  