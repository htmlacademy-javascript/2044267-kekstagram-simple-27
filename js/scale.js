const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

function scaleImage(value) {
  scaleValue.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
}

function onButtonMinClick() {
  const currentValue = parseInt(scaleValue, 10);
  let newValue = currentValue - STEP;

  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }
  scaleImage(newValue);
}

buttonMin.addEventListener('click', onButtonMinClick);

function onButtonMaxClick() {
  const currentValue = parseInt(scaleValue, 10);
  let newValue = currentValue + STEP;

  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }
  scaleImage(newValue);
}

function resetValue() {
  scaleImage(100);
}

buttonMax.addEventListener('click', onButtonMaxClick);

export {resetValue};
