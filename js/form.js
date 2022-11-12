import {isEscapeKey} from './util.js';
import './preview.js';

const uploadForm = document.querySelector('#upload-file');
const uploadOpenForm = document.querySelector('.img-upload__overlay');
const uploadCloseForm = uploadForm.querySelector('#upload-cancel');
const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserForm();
  }
};

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

uploadForm.addEventListener('click', () => {
  openUserForm ();
});

uploadForm.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    openUserForm ();
  }
});

uploadCloseForm.addEventListener('click', () => {
  closeUserForm ();
});
