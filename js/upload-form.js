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
  submitButton.textContent = 'Отправляю...';
}

function isEnableSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

function onUploadCloseFormClick() {
  closeUserForm();
}

function openUserForm() {
  uploadOpenForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
  uploadCloseForm.addEventListener('click', onUploadCloseFormClick);
  userForm.addEventListener('submit', onUserFormSubmit);
}

function closeUserForm() {
  resetEffects();
  resetScale();
  userForm.reset();
  pristine.reset();
  uploadOpenForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  uploadCloseForm.removeEventListener('click', onUploadCloseFormClick);
  userForm.removeEventListener('submit', onUserFormSubmit);
}

function onUploadFormChange() {
  openUserForm();
}

uploadForm.addEventListener('change', onUploadFormChange);

function renderSuccessMessage() {
  const successElement = successTemplate.cloneNode(true);
  const inner = document.querySelector('.success__inner');
  document.body.append(successElement);

  function closeMessage() {
    successElement.remove();
    document.removeEventListener('keydown', onResetKeydown);
  }

  successElement.addEventListener('click', (evt) => {
    if (evt.target === inner) {
      return;
    }
    document.addEventListener('click', closeMessage);
  });

  function onResetKeydown(evt) {
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

  function closeErrorMessage() {
    failElement.remove();
    document.removeEventListener('keydown', onResetError);
  }

  failElement.addEventListener('click', (evt) => {
    if (evt.target === error){
      return;
    }
    document.addEventListener('click', closeErrorMessage);
  });

  function onResetError(evt) {
    if (isEscapeKey (evt)) {
      closeErrorMessage();
    }
  }

  document.addEventListener('keydown', onResetError);
}

function onUserFormSubmit(evt) {
  evt.preventDefault();

  if (pristine.validate()) {
    isDisableSubmitButton();
    sendData(
      () => {
        isEnableSubmitButton();
        closeUserForm();
        renderSuccessMessage();
      },
      () => {
        isDisableSubmitButton();
        renderErrorMessage();
      },
      new FormData(evt.target),
    );
  }
}

export {onUserFormSubmit};

