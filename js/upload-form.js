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

function openUserForm () {
  uploadOpenForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
}

function closeUserForm () {
  uploadOpenForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
}

function onUploadFormClick () {
  openUserForm();
}

uploadForm.addEventListener('change', onUploadFormClick);

function onUploadCloseForm () {
  closeUserForm();
}

uploadCloseForm.addEventListener('click', onUploadCloseForm);


