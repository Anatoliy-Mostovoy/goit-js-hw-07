const input = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

input.addEventListener('input', onInputDo);

function onInputDo(element){
    spanOutput.textContent!==' '? 
    spanOutput.textContent = element.currentTarget.value:
    spanOutput.textContent = 'незнакомец';
};
