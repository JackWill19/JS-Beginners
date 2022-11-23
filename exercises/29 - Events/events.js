const butts = document.querySelector(".butts"); // Selecting buttons
const coolButton = document.querySelector(".cool");

function handleClick() { // Creating function to be called when button is clicked
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!"); //Arrow function

butts.addEventListener("click", function () { // When button is clicked, log "Im an anon!" to the console
  console.log("Im an anon!");
});
coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy"); // Selecting buy buttons

function handleBuyButtonClick(e) {
    console.log('You clicked a button!')
    const button = e.target;
    // console.log(button.textContent);
    // console.log(parseFloat(e.target.dataset.price));
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.target === e.currentTarget);
    //Stopping propagation
    // e.stopPropagation();

}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', (e) => {
    console.log('You Clicked The Window!');
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles);
    e.stopPropagation();
}, {
    capture : true
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', (e) => {
    console.log(e.currentTarget);
    console.log(this);
})