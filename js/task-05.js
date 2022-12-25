const refs = {
    inpurEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
const onInputChange = () =>
    refs.inpurEl.value = ''
        ? refs.spanEl.textContent = "Anonymous"
        : refs.spanEl.textContent = refs.inpurEl.value;
refs.inpurEl.addEventListener('input', onInputChange);