
// Implementing localStorage: 

 let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // Otherwise every time you refresh the page the array will be empty

 localStorage.setItem('items', JSON.stringify(itemsArray))
 const data = JSON.parse(localStorage.getItem('items'));


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

const liMaker =(text)=>{
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li)
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray)) // We use JSON.stringify because setImes just accept strings as values
    liMaker(input.value);
    input.value = '';
    console.log(itemsArray)
    
})

data.forEach((item) => {
    liMaker(item)
})


// const clearAll = () => {
//   ul.innerHTML = ''
// }

// // Option two:
// const clearAll = () => {
//     while(ul.firstChild){
//         ul.removeChild(ul.firstChild)
//     }
// }
 
button.addEventListener('click', function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})

//localStorage.clear();



