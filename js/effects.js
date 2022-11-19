const imageEffect = document.querySelector('.img-upload__preview img');
const userForm = document.querySelector('.img-upload__form');

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
  },
  {
    name:'chrome',
    style: 'grayscale',
  },
  {
    name: 'sepia',
    style: 'sepia',
  },
  {
    name: 'marvin',
    style: 'invert',
  },
  {
    name: 'phobos',
    style: 'blur',
  },
  {
    name: 'heat',
    style: 'brightness',
  }
];

const ORIGINAL_EFFECT = EFFECTS[0];
let currentEffect = ORIGINAL_EFFECT;

function onEffectChange(evt) {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageEffect.className = '';
  imageEffect.style.filter = `${currentEffect.style}`;
  imageEffect.classList.add(`effects__preview--${currentEffect.name}`);
}

function resetEffects() {
  imageEffect.style.filter = 'none';
}

userForm.addEventListener('change', onEffectChange);

export {resetEffects};
