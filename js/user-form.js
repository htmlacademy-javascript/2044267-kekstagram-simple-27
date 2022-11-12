const userForm = document.querySelector('.img-upload__form');

userForm.addEventListener('submit', (evt)) => {
evt.preventDefault()

const isValid = document.querySelector('.text__description').validate();
if (isValid) {

} else {
    
}
};


