import {createPicture} from './preview.js';
import {onUserFormSubmit} from './upload-form.js';
import {getData} from './api.js';

getData(createPicture, onUserFormSubmit);
