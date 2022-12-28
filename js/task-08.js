const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Bce поля должны быть заполнены :)")
    }
    const user = { Email: email.value, Password: password.value };
    
    console.log(user);
    
    e.currentTarget.reset();
}