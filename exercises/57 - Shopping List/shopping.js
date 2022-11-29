const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//need an array to hold state
let items = [];

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    //If empty dont submit
    if(!name) return;
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };

    // push items into state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);

    //clear form
    e.target.reset();
    
    // Custom event that tells you the item has been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated')); //attatches a new event 'itemsUpdated' to the list class


}

function displayItems() {
    console.log(items);
    const html = items
    .map(item => `
    <li class="shopping-item">
        <input value="${item.id}" type="checkbox" ${item.complete && 'checked'}>
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" value="${item.id}">&times;</buttonaria-label="Remove>
    </li> `)
    .join('');
    list.innerHTML = html;
    console.log(html);
}

function mirrorToLocalStorage(){
    console.info('Saving to localstorage');
    localStorage.setItem('items', JSON.stringify(items)); // local storage only takes text so items needs to be converted to string
}

function restoreFromLocalStorage(){
    console.info('Restoring from localstorage');
    const localItems = JSON.parse(localStorage.getItem('items')); // pulling items from local storage, parsing string into an object
    if (localItems.length){
        // items = localItems; // dump locally stored items back into the items arra
        items.push(...localItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    console.log('DELETING ITEM', id);
    //update items array without the selected item
    items = items.filter(item => item.id !== id); // using .filter to remove the selected item
    list.dispatchEvent(new CustomEvent('itemsUpdated')); //Updating local storage

}


function markCompleted(id){
    const itemRef = items.find(item => item.id === id);
    itemRef.complete = !itemRef.complete;
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