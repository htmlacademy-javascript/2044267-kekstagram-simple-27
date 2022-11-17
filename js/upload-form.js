import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('#upload-file');
const uploadOpenForm = document.querySelector('.img-upload__overlay');
const uploadCloseForm = uploadOpenForm.querySelector('.img-upload__cancel');

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
}

function onUploadFormChange () {
  openUserForm();
}

uploadForm.addEventListener('change', onUploadFormChange);
