const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ulEl = document.querySelector('#ingredients');

const listElOfLi = ingredients.map(ingredient=>{
  const liEl= document.createElement('li');
  liEl.textContent= ingredient;
  return liEl;
});

ulEl.append(...listElOfLi);



 



  
