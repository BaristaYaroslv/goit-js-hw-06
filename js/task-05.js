// const refs = {
//     inpurEl: document.querySelector('#name-input'),
//     spanEl: document.querySelector('#name-output'),
// };
// const onInputChange = () =>
//     refs.inpurEl.value = ''
//         ? refs.spanEl.textContent = "Anonymous"
//         : refs.spanEl.textContent = refs.inpurEl.value;
// refs.inpurEl.addEventListener('input', onInputChange);

const inputRef = document.querySelector(`#name-input`)
const spanRef = document.querySelector(`#name-output`)
inputRef.addEventListener(`input`, (event) => {
    if (event.currentTarget.value === ``) {
        return spanRef.textContent = `Anonymous`;
    }
    if (event)
    {return spanRef.textContent = event.currentTarget.value}
}) 