const inputValue = document.querySelector('input');
const mainBox = document.querySelector('#boxes');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]')

inputValue.addEventListener('click', onInputValue);

function onInputValue(event){
    // createBoxes(event.currentTarget.value)
}

function createBoxes(amount){
   
    for(let i=0; i<amount; i+=1){
        const divCrete = document.createElement('div');
        divCrete.classList.add('box_item')
        mainBox.appendChild(divCrete)
    }
    
}

renderBtn.addEventListener('click',onRenderBtnClick);

function onRenderBtnClick(){
console.log('Хотим создать')
createBoxes(inputValue.value);
}

destroyBtn.addEventListener('click',onDestroyBtnClick);

function onDestroyBtnClick(){
    console.log('Хотим удалить')
    inputValue.value='';
    mainBox.innerHTML='';
} 
