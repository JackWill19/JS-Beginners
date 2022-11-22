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
})
