const jack = document.querySelector('.jack');

// console.log(jack.children);
// console.log(jack.firstElementChild);
// console.log(jack.lastElementChild);
// console.log(jack.previousElementSibling);
// console.log(jack.nextElementSibling);
// console.log(jack.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
