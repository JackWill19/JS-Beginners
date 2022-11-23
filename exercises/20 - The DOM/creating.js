
const myParagraph = document.createElement('p'); // Creating a paragraph tag
myParagraph.textContent = 'I am a P'; // Changing the content of the p tag
myParagraph.classList.add('special'); // adding a class to the p tag
console.log(myParagraph);

const myImage = document.createElement('img'); // creating image
myImage.src = 'https://source.unsplash.com/random/600x600'; // setting source of image
myImage.alt = 'Photo'; // setting an alt tag for image
console.log(myImage);

const myDiv = document.createElement('div'); // creating a div
myDiv.classList.add('wrapper'); // setting class name for div
console.log(myDiv);


myDiv.appendChild(myParagraph); // appending paragraph to div
myDiv.appendChild(myImage); // appending the image to the div

// document.body.appendChild(myDiv); // Adds the child element that you created to the selected container, in this case, body

const heading = document.createElement('h2');
heading.textContent = 'Cool Heading';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const listItem4 = document.createElement('li');
const listItem5 = document.createElement('li');

listItem1.textContent = 'One';
listItem2.textContent = 'Two';
listItem3.textContent = 'Three';
listItem4.textContent = 'Four';
listItem5.textContent = 'Five';


myDiv.appendChild(list);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);
list.appendChild(listItem5);

document.body.appendChild(myDiv);
