// const paragraph = document.querySelector('p'); // Selecting one paragraph element
// const divs = document.querySelectorAll('div'); // Selecting all divs
// const img = document.querySelectorAll('.item img'); // Selecting a specific element inside a div
// const heading = document.querySelector('h2');

// console.log('paragraph');
// console.log('divs');
// console.log('img');

// console.dir('heading'); // console.dir - Shows object properties 
// heading.textContent = 'Jack is cool'; // Sets the content of the object(SETTING)
// console.log(heading.textContent);// .textContent shows the content of the object (GETTING)... innerText does the same but is aware of CSS styling

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
// pizzaList.textContent = `${pizzaList.textContent} 17!`;
pizzaList.insertAdjacentText('beforeend', '17!'); //Easiest way to add text to existing text
console.log(pizzaList);
