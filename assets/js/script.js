console.log('Js carregando');

// variables
const openForm = document.querySelector('.reserve-button');
const form = document.querySelector('.form-help');
const closeForm = document.querySelector('.form-mask');

// functions
function onForm() {
    const viewForm = openForm

    if (viewForm) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        closeForm.style.visibility = "visible";
    }
};

function forwardForm(event) {
    event.preventDefault();

    console.log('Formulário enviado com sucesso!');

    form.reset();

    offForm()
};

function offForm() {
    const mask = closeForm

    if (mask) {
        form.style.left = "-350px";
        form.style.transform = "none";
        closeForm.style.visibility = "hidden";
    }

    form.reset();
};

// events
openForm.addEventListener('click', onForm);
form.addEventListener('submit', forwardForm);
closeForm.addEventListener('click', offForm);

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        offForm();
    }
});

// mask
$(document).ready(function () {
    $('.input-number').mask('(00) 0 0000-0000');
});