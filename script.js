const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const mainCard = document.getElementById('main');
const successCard = document.getElementById('success');
const dismiss = document.getElementById('dismiss');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const emailValue = email.value.trim();

    if (email.value === '' || email.value.length < 6 || !isValidEmail(emailValue)) {
        errorElement.innerText = 'Valid email required';
            email.style.backgroundColor = 'hsl(4, 100%, 94%)'
            email.style.border = '1px solid hsl(4, 100%, 67%)';
    } else {
        console.log('good');
        successCard.classList.toggle('hidden');
        mainCard.classList.toggle('hidden');
    }
} 

dismiss.addEventListener('click', () => {
    successCard.classList.toggle('hidden');
    mainCard.classList.toggle('hidden');
})