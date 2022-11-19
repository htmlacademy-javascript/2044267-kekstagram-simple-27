const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

function changeValue(newValue) {
  scaleValue.value = `${newValue}%`;
  imagePreview.style.transform = `scale(${newValue / 100})`;
}

function onButtonMinClick() {
  const currentValue = scaleValue.value;
  const valueNumber = parseInt(currentValue, 10);
  if (valueNumber > MIN_VALUE && valueNumber <= MAX_VALUE) {
    changeValue(valueNumber - STEP);
  }
}

buttonMin.addEventListener('click', onButtonMinClick);

function onButtonMaxClick() {
  const currentValue = scaleValue.value;
  const valueNumber = parseInt(currentValue, 10);
  if (valueNumber >= MIN_VALUE && valueNumber < MAX_VALUE) {
    changeValue(valueNumber + STEP);
  }
}

buttonMax.addEventListener('click', onButtonMaxClick);

export function resetScale() {
  changeValue(100);
}
