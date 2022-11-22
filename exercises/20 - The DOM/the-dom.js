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

// const pizzaList = document.querySelector('.pizza');
// // pizzaList.textContent = `${pizzaList.textContent} 17!`;
// pizzaList.insertAdjacentText('beforeend', '17!'); //Easiest way to add text to existing text
// console.log(pizzaList);

//Classes
const pic = document.querySelector('.nice');
pic.classList.add('open'); // pic.classList.add('open') will add an open class to the opject
pic.classList.remove('cool'); // pic.classList.remove('open'); will remove the cool class


pic.addEventListener('click', () => {
    pic.classList.toggle('round');
});

pic.alt = 'Random pic';  //adding missing attributes to pic

window.addEventListener('load', () => {
    console.log(pic.naturalWidth);
});

// pic.setAttribute('alt', 'Yet Another Random Pic'); //Sets a new value to the alt tag
// console.log(pic.getAttribute('alt')); //Will get the alt tag for the picture

const custom = document.querySelector('.custom');
console.log(custom.dataset); // .dataset will return an objest with all the data properties of the object (Data-name for example)
custom.addEventListener('click', () => {
    alert(`Welcome ${custom.dataset.name}!`); //Will return the value of data-name into a string = "Welcome first!"
});