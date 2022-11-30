const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//need an array to hold state
let items = [];

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value; // Targeting the value of the input field
    if(!name) return; //If empty dont submit
    const item = { // Creating an item object
        name: name, 
        id: Date.now(), //Using date to set a unique ID
        complete: false,
    };

    // push items into state
    items.push(item); // Pushing item into empty items array
    console.log(`There are now ${items.length} in your state`);

    e.target.reset(); // Resetting the value in the input field
    
    // Custom event that tells you the item has been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated')); //attatches a new event 'itemsUpdated' to the list class


}

function displayItems() { // Creating a function to display items
    console.log(items);
    const html = items //Mapping a html block over each individual item which will display their name, id, a checkbox and a delete button
    .map(item => ` 
    <li class="shopping-item">
        <input value="${item.id}" type="checkbox" ${item.complete && 'checked'}>
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button aria-label="Remove">
    </li> `)
    .join(''); //Joining the mapped array to each item
    list.innerHTML = html; // setting the inner html of the list div to the html passed above
}

function mirrorToLocalStorage(){
    localStorage.setItem('items', JSON.stringify(items)); // local storage only takes text so items needs to be converted to string
}

function restoreFromLocalStorage(){
    const localItems = JSON.parse(localStorage.getItem('items')); // pulling items from local storage, parsing string into an object
    if (localItems.length){
        // items = localItems; // dump locally stored items back into the items arra
        items.push(...localItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    //update items array without the selected item
    items = items.filter(item => item.id !== id); // using .filter to remove the selected item
    list.dispatchEvent(new CustomEvent('itemsUpdated')); //Updating local storage

}


function markCompleted(id){
    const itemRef = items.find(item => item.id === id); // Finding the list item by its ID
    itemRef.complete = !itemRef.complete; // Checks if the item is there
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems); // Listening for new custom event, when item updates, display item
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// EVENT DELEGATION
list.addEventListener('click', function(e) { // Listen for a click on list UL
    const id = parseInt(e.target.value);

    if(e.target.matches('button')){ // if what is clicked is a button then run deleteItem()
        deleteItem(id);
    }

    if(e.target.matches('input[type="checkbox"]')) {
        markCompleted(id);
    }
});

restoreFromLocalStorage();