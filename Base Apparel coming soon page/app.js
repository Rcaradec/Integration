console.log('working')

const form = document.getElementById('form');
const email = document.getElementById('mail_input');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent to refresh the page
    const emailVal = email.value;

    // check if it is a valid email

    if (!validateEmail(emailVal)) {
        form.classList.add('error')
        form.classList.remove('success')
    } else {
        form.classList.remove('error')
        form.classList.add('success')


    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

