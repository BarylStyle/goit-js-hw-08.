import throttle from "lodash.throttle";
const form = document.querySelector('form.feedback-form');

const formDataStr = localStorage.getItem("feedback-form-state");
if (formDataStr) {
    const formData = JSON.parse(formDataStr);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (ev) => {
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
});

const saveDataToStorage = throttle((data) => {
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}, 500);

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    saveDataToStorage(data);
    
    console.log(data);
    localStorage.clear();
    form.reset();
});
