const scaleData = {
  step: 25,
  min: 25,
  max: 100
};

const imagePreview = document.querySelector('.img-upload__preview');
const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
let currentValue = parseFloat(scaleValue.value);

function onButtonMinClick() {
  if (currentValue > scaleData.min) {
    currentValue -= scaleData.step;
    imagePreview.style.transform = `scale(${currentValue / 100})`;
    scaleValue.value = currentValue;
  }
}

buttonMin.addEventListener('click', onButtonMinClick);

function onButtonMaxClick() {
  if (currentValue < scaleData.max) {
    currentValue += scaleData.step;
    imagePreview.style.transform = `scale(${currentValue / 100})`;
    scaleValue.value = currentValue;
  }
}

function resetScale() {
  imagePreview.style.transform = 'none';
}

buttonMax.addEventListener('click', onButtonMaxClick);

export {resetScale};


