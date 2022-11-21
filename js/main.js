import {data} from './data.js';
import {createPicture} from './preview.js';
import {onUserFormSubmit} from './upload-form.js';
import {getData} from './api.js';

createPicture(data);
getData();
onUserFormSubmit();


