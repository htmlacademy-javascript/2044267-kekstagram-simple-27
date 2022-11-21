const minLength = 20;
const maxLength = 140;

const userForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

const validateDescription = (value) => value.length >= minLength && value.length <= maxLength;

pristine.addValidator(userForm.querySelector('.text__description'), validateDescription);

function onUserFormSubmit(evt) {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
}

userForm.addEventListener('submit', onUserFormSubmit);

export {pristine};
