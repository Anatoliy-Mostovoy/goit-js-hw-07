let counterValue = 0; 

const decrementBtn = 
document.querySelector('button[data-action="decrement"]')

const totalValue = document.querySelector('#value');


const incrementBtn =
document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', onTargetDecrementBtnClick);

function onTargetDecrementBtnClick(){
    counterValue-=1;
    totalValue.innerHTML=counterValue;
};

incrementBtn.addEventListener('click', onTargetIncrementBtnClic);
 
function onTargetIncrementBtnClic (){
    counterValue+=1;
    totalValue.innerHTML=counterValue;
};

 
