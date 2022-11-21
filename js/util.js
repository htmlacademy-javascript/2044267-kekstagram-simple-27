const alertShowTime = 1000;

function checkLenght(string, maxLenght) {
  return string.length <= maxLenght;
}

function getRandomNum(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

  setTimeout(() => {
    alertContainer.remove();
  }, alertShowTime);
}

export {checkLenght, getRandomNum, isEscapeKey, showGetDataAlert};

