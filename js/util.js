const TIMEOUT = 1000;

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function showGetDataAlert(message) {
  const alertContainer = document.createElement('div');
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

  function removeAlertContainer() {
    alertContainer.remove();
  }

  setTimeout(removeAlertContainer, TIMEOUT);
}

export {isEscapeKey, showGetDataAlert};
