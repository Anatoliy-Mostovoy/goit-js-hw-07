const allElOfMainList = document.querySelectorAll('.item');
console.log(`В списке ${allElOfMainList.length} категории`)

allElOfMainList.forEach(el=> {const newTitle = el.querySelector('h2'); 
console.log(`Категория: ${newTitle.textContent}`);

const newItem = el.querySelectorAll('li')
console.log(`Количество элементов: ${newItem.length}`)
});


