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

export {checkLenght, getRandomNum, isEscapeKey};

