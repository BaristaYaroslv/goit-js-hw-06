const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const { elements: { login, password } } = e.currentTarget;

    if (login.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены :)")
    }
    console.log('Login: ${login.value},Password: ${password.value}');
    e.currentTarget.reset();
}