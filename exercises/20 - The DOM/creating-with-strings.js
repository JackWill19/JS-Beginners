
const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `A Random Image`

const myHTML = `
   <div class="wrapper">
    <h2>RANDOM IMAGE</h2>
    <img src="${src}" alt="${desc}"></img>
   </div>
`;

// item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');
// console.log(itemImage);

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);