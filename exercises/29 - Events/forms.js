const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
    console.log('Clicked!');
    const changePage = confirm('Danger! Continue?');
    
    if(!changePage) {
        e.preventDefault();
    }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', (e) => {
    const name = e.currentTarget.name.value;
    if (name.includes('Melvin')) {
        alert('Grow up, Get a new name.');
        e.preventDefault();
    }
})

function logEvent (e) {
    console.log(e.type);
    console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

function handlePhotoClick(e){
    if(e.type === 'click' || e.key === 'Enter'){
    console.log('Clicked!');
    }
}

const photo = document.querySelector('.photo');
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
