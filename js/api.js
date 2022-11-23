const URL = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData(onSuccess, onFail) {
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onFail);
}

function sendData(onSuccess, onFail, body) {
  fetch(
    URL,
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
    .catch(onFail);
}

export {getData, sendData};
