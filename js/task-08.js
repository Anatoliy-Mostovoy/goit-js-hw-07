const inputValue = document.querySelector('input');
const mainBox = document.querySelector('#boxes');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]')

inputValue.addEventListener('click', onInputValue);

function onInputValue(event){
    // createBoxes(event.currentTarget.value)
}

function createBoxes(amount){
   const allDiv=[];

    for(let i=0; i<amount; i+=1){
        const divCreate = document.createElement('div');
        divCreate.classList.add('box_item')
        allDiv.push(divCreate);
    }
    
    mainBox.append(...allDiv)
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
