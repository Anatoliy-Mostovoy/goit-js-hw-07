const inputValue = document.querySelector('input');
const mainBox = document.querySelector('#boxes');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]')

inputValue.addEventListener('click', onInputValue);

function onInputValue(event){}

function createBoxes(amount){
   const allDiv=[];

    for(let i=0; i<amount; i+=1){
        const divCreate = document.createElement('div');
        divCreate.classList.add('box_item')
        divCreate.style.width = `${i*10+30}px`;
        divCreate.style.height = `${i*10+30}px`;
        divCreate.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

        function getRandom(min, max){
          return Math.ceil(Math.random() * (max - min) + min)
        }
        allDiv.push(divCreate);
    }

    mainBox.append(...allDiv)
}

renderBtn.addEventListener('click',onRenderBtnClick);

function onRenderBtnClick(){
createBoxes(inputValue.value);
}

destroyBtn.addEventListener('click',onDestroyBtnClick);

function onDestroyBtnClick(){
    inputValue.value='';
    mainBox.innerHTML='';
} 
