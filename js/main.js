import {data} from './data.js';
import {createPicture} from './preview.js';
import {initImageForm} from './upload-form.js';
import {getData} from './api.js';
import {showGetDataAlert} from './message.js';
import './upload-form.js';
import './scale.js';
import './effects.js';

createPicture(data);
initImageForm();
getData();
showGetDataAlert();

