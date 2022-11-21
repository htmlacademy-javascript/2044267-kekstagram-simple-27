import {showGetDataAlert} from './util.js';

const sendUrl = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData(onSuccess) {
  fetch(`${sendUrl}/data`)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      showGetDataAlert('Ошибка получения данных с сервера');
    });
}

function sendData(onSuccess, onFail, body) {
  fetch(
    sendUrl,
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
}

export {getData, sendData};
