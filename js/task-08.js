const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Bce поля должны быть заполнены :)")
    }
    const formData = new FormData(e.currentTarget);
    console.log(`Email: ${email.value}
Password: ${password.value}`);
    // for(let [name, value] of formData) {
    // console.log(`${name} = ${value}`); }
    
    e.currentTarget.reset();
}