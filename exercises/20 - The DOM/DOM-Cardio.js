// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
// add three list items with the words "one, two, three" in them
const ul = ` 
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
`;
// put that list into the above wrapper
myDiv.innerHTML = ul;
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = `https://source.unsplash.com/random/300x300`;
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="htmlDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
</div>
`;

const ulElement = myDiv.querySelector('ul');
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const newDiv = myDiv.querySelector('.htmlDiv');
newDiv.children[1].classList.add('warning')
// remove the first paragraph
newDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const html = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
        <button class="delete" type="btn">&times; Delete</button>
    </div>
    `;

    return html
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Jack', 23, 190);
cardsHTML += generatePlayerCard('Josh', 23, 150);
cardsHTML += generatePlayerCard('James', 24, 160);
cardsHTML += generatePlayerCard('Joe', 23, 170);

cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(e) {
const clickedBtn = e.currentTarget;
clickedBtn.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));