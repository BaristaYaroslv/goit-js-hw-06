const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены :)")
    }
    console.log('Email: ${ email } , Password: ${password}');
    e.currentTarget.reset();
}