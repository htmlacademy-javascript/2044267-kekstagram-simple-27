import {createPicture} from './preview.js';
import {getData} from './api.js';
import {showGetDataAlert} from './util.js';
import './upload-form.js';

function onFailData() {
  showGetDataAlert('Ошибка получения данных с сервера');
}

getData(createPicture, onFailData);
