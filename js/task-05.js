
const input = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

input.addEventListener('input', onInputDo);

function onInputDo(element){
    input.value === '' 
    ? spanOutput.textContent = 'незнакомец' 
    : spanOutput.textContent = element.currentTarget.value;
};