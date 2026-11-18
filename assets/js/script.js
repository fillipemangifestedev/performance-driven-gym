console.log('Js carregando');

// variables
const openForm = document.querySelector('.reserve-button');
const form = document.querySelector('.form-help');
const closeForm = document.querySelector('.form-mask');

const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const textareaInput = document.querySelector('.input-text');
const sendForm = document.querySelector('.form-reserve-button');

// functions
function onForm() {
    const viewForm = openForm

    if (viewForm) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        closeForm.style.visibility = "visible";
    }
};

function forwardForm() {
    const nameText = nameInput.value
    const emailText = emailInput.value
    const textText = textareaInput.value

    if (nameText && emailText && textText) {
        return;
    };
};

function offForm() {
    const mask = closeForm

    if (mask) {
        form.style.left = "-350px";
        form.style.transform = "none";
        closeForm.style.visibility = "hidden";
    }
};

// events
openForm.addEventListener('click', onForm);
sendForm.addEventListener('click', forwardForm);
closeForm.addEventListener('click', offForm);