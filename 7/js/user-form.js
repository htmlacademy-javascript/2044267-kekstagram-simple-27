const userForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

function onUserFormSubmit (evt) {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
}

userForm.addEventListener('submit', onUserFormSubmit);
