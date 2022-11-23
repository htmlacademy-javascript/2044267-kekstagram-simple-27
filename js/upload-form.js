import {resetEffects} from './effects.js';
import {resetScale} from './scale.js';
import {isEscapeKey} from './util.js';
import {sendData} from './api.js';

const userForm = document.querySelector('#upload-select-image');
const uploadForm = document.querySelector('#upload-file');
const uploadOpenForm = document.querySelector('.img-upload__overlay');
const uploadCloseForm = uploadOpenForm.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('#upload-submit');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

function onFormEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserForm();
  }
}

function isDisableSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
}

function isEnableSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
}

function onUploadCloseFormClick () {
  closeUserForm();
}

function openUserForm () {
  uploadOpenForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
  uploadCloseForm.addEventListener('click', onUploadCloseFormClick);
}

function closeUserForm () {
  uploadOpenForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  uploadCloseForm.removeEventListener('click', onUploadCloseFormClick);
  resetEffects();
  resetScale();
  userForm.reset();
}

function onUploadFormChange () {
  openUserForm();
}

uploadForm.addEventListener('change', onUploadFormChange);

function renderSuccessMessage() {
  const successElement = successTemplate.cloneNode(true);
  const inner = document.querySelector('.success__inner');
  document.body.append(successElement);

  const closeMessage = () => {
    successElement.remove();
    document.removeEventListener('keydown', onResetKeydown);
  };

  successElement.addEventListener('click', (evt) => {
    if (evt.target === inner) {
      return;
    }
    closeMessage();
  });

  function onResetKeydown (evt) {
    if (isEscapeKey (evt)) {
      closeMessage();
    }
  }

  document.addEventListener('keydown', onResetKeydown);
}

function renderErrorMessage() {
  const failElement = errorTemplate.cloneNode(true);
  const error = document.querySelector('.error__inner');
  document.body.append(failElement);

  const closeErrorMassage = () => {
    failElement.remove();
    document.removeEventListener('keydown', onResetError);
  };

  failElement.addEventListener('click', (evt) => {
    if (evt.target === error){
      return;
    }
    closeErrorMassage();
  });

  function onResetError (evt){
    if (isEscapeKey (evt)) {
      closeErrorMassage();
    }
  }

  document.addEventListener('keydown', onResetError);
}

function onUserFormSubmit(evt) {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    isDisableSubmitButton();
  } else {
    isEnableSubmitButton();
    return;
  }

  sendData(
    () => {
      isEnableSubmitButton();
      closeUserForm();
      renderSuccessMessage();
    },
    () => {
      isEnableSubmitButton();
      renderErrorMessage();
    },
    new FormData(evt.target),
  );
}

userForm.addEventListener('submit', onUserFormSubmit);

export {onUserFormSubmit};

