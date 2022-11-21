import {resetEffects} from './effects.js';
import {resetScale} from './scale.js';
import {isEscapeKey} from './util.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {sendData} from './api.js';

const userForm = document.querySelector('.img-upload__form');
const uploadForm = document.querySelector('#upload-file');
const uploadOpenForm = document.querySelector('.img-upload__overlay');
const uploadCloseForm = uploadOpenForm.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const closeImageEditButton = document.querySelector('#upload-cancel');

function onFormEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserForm();
  }
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
}

function onUploadFormChange () {
  openUserForm();
}

uploadForm.addEventListener('change', onUploadFormChange);

function isDisableSubmitButton() {
  submitButton.disabled = true;
}

function isEnableSubmitButton() {
  submitButton.disabled = false;
}

function resetFieldsValues() {
  userForm.reset();
}

function onImageFormSubmit(evt, onSuccess) {
  evt.preventDefault();

  isDisableSubmitButton();
  const formData = new FormData(evt.target);
  sendData(
    () => {
      isEnableSubmitButton();
      onSuccess();
      showSuccessMessage();
      resetFieldsValues();
    },
    () => {
      isEnableSubmitButton();
      showErrorMessage();
    },
    formData
  );
}

userForm.addEventListener('submit', onImageFormSubmit);

function initImageForm() {
  uploadForm.addEventListener('change', openUserForm());
  closeImageEditButton.addEventListener('click', closeUserForm());
  onImageFormSubmit(closeUserForm());
}

export {initImageForm};

