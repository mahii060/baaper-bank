const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function () {
    // get email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (email === 'sontan@baap.com' && password === 'baapersontan') {

        // Set userName in localStorage
        const userNameField = document.getElementById('user-name-field');
        const name = userNameField.value;
        localStorage.setItem('userName', name);

        // Redirect to bank.html
        location.href = 'bank.html'
    }
    else {
        alert('কিহ!!! তুই পাসওয়ার্ড ভুলে গেছস!! যা তোকে ত্যায্য করে দিলাম')
    }

})