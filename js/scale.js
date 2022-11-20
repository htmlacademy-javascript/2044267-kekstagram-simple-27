const imagePreview = document.querySelector('.img-upload__preview');
const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleData = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};
let currentValue = parseFloat(scaleValue.value);

function onButtonMinClick() {
  if (currentValue > scaleData.MIN) {
    currentValue -= scaleData.STEP;
    imagePreview.style.transform = `scale(${currentValue / 100})`;
    scaleValue.value = currentValue;
  }
}

buttonMin.addEventListener('click', onButtonMinClick);

function onButtonMaxClick() {
  if (currentValue < scaleData.MAX) {
    currentValue += scaleData.STEP;
    imagePreview.style.transform = `scale(${currentValue / 100})`;
    scaleValue.value = currentValue;
  }
}

function resetScale() {
  imagePreview.style.transform = 'none';
}

buttonMax.addEventListener('click', onButtonMaxClick);

export {resetScale};


