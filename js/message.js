let successButton;
let errorButton;

function hideSuccessMessage() {
  const successElement = document.querySelector('.success');
  if (successElement){
    successElement.remove();
  }
}

function hideErrorMessage() {
  const errorElement = document.querySelector('.error');
  if (errorElement){
    errorElement.remove();
  }
}

function onSuccessButtonClick() {
  hideSuccessMessage();
}

function onErrorButtonClick() {
  hideErrorMessage();
}

function isDocumentKeydownHandler(evt) {
  if (evt.key === 'Escape') {
    hideErrorMessage();
    hideSuccessMessage();
  }
}

document.removeEventListener('keydown', isDocumentKeydownHandler);

function isDocumentClickHandler(evt) {
  if (!evt.target.classList.contains('error__inner') && !evt.target.classList.contains('success__inner')) {
    hideErrorMessage();
    hideSuccessMessage();
  }
}

document.removeEventListener('click', isDocumentClickHandler);

function showSuccessMessage() {
  const messageTemplate = document.querySelector('#success').content;
  const successMessage = messageTemplate.cloneNode(true);
  successButton = successMessage.querySelector('.succes__button');
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', isDocumentKeydownHandler);
  document.addEventListener('click', isDocumentClickHandler);
  document.body.append(successMessage);
}

function showErrorMessage() {
  const messageTemplate = document.querySelector('#error').content;
  const errorMessage = messageTemplate.cloneNode(true);
  errorButton = errorMessage.querySelector('.succes__button');
  // errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', isDocumentKeydownHandler);
  document.addEventListener('click', isDocumentClickHandler);
  document.body.append(errorMessage);
}


function showGetDataAlert(message) {
  const alertContainer = document.querySelector('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'orange';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
}

export {showSuccessMessage, showErrorMessage, showGetDataAlert};


