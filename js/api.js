const getUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const sendUrl = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData(onSuccess, onError) {
  fetch(getUrl)
    .then((response) => {
      if (!response.ok){
        onError();
      }
      return response.json();
    })
    .then((posts) => {
      onSuccess(posts);
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
    .catch(() => {
      onFail();
    });
}

export {getData, sendData};
