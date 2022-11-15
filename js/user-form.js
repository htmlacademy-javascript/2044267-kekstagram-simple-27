const userForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

function onUserFormClick (evt) {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    
  } else {
    
  }
}

userForm.addEventListener('submit', onUserFormClick);
