

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('resume');
    const fileError = document.getElementById('fileError');
    const fileSizeLimitMB = 5;
  
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      const fileSizeMB = file.size / (1024 * 1024); 
  
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const allowedExtensions = ['pdf', 'docx']; 
  
      if (!allowedExtensions.includes(fileExtension)) {
        fileError.textContent = 'Invalid file format. Only PDF and DOCX files are allowed.';
        this.value = ''; 
      } else if (fileSizeMB > fileSizeLimitMB) {
        fileError.textContent = 'File size exceeds the limit of 5 MB.';
        this.value = ''; 
      } else {
        fileError.textContent = '';
      }
    });

    
   
  
    function validateForm() {
      let isValid = true;
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const firstNameInput = document.getElementById('firstName');
      const lastNameInput = document.getElementById('lastName');
      const addressInput = document.getElementById('address');
      
      const emailError = document.getElementById('emailError');
      const phoneError = document.getElementById('phoneError');
      const nameError = document.getElementById('nameError');
      const addressError = document.getElementById('addressError');
  
      if (firstNameInput.value.trim() === '' || lastNameInput.value.trim() === '') {
        nameError.textContent = 'Both first and last names are required';
        isValid = false;
      } else {
        nameError.textContent = '';
      }
  
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
      } else {
        emailError.textContent = '';
      }
  
      const phoneValue = phoneInput.value.trim();
      if (phoneValue === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
      } else if (!isValidPhoneNumber(phoneValue)) {
        phoneError.textContent = 'Invalid phone number format. Please enter XXX-XXX-XXXX';
        isValid = false;
      } else {
        phoneError.textContent = '';
      }
  
      const addressValue = addressInput.value.trim();
      if (addressValue === '') {
        addressError.textContent = 'Address is required';
        isValid = false;
      } else if (addressValue.length < 5) {
        addressError.textContent = 'Address should be at least 5 characters long';
        isValid = false;
      } else {
        addressError.textContent = '';
      }
  
      return isValid;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhoneNumber(phone) {
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      return phoneRegex.test(phone);
    }
});

