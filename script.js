document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (!/^[A-Za-z\s]+$/.test(fullName.value)) {
        isValid = false;
        fullName.style.border = '3px solid red';
    } else {
        fullName.style.border = '3px solid green';
    }

    // Validate Email
    const email = document.getElementById('email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        isValid = false;
        email.style.border = '3px solid red';
    } else {
        email.style.border = '3px solid green';
    }

    // Validate Phone Number
    const phone = document.getElementById('phone');
    if (!/^\d{10,15}$/.test(phone.value)) {
        isValid = false;
        phone.style.border = '3px solid red';
    } else {
        phone.style.border = '3px solid green';
    }

    // Validate Password
    const password = document.getElementById('password');
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password.value)) {
        isValid = false;
        password.style.border = '3px solid red';
    } else {
        password.style.border = '3px solid green';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fix the errors highlighted in red.');
    }
});
