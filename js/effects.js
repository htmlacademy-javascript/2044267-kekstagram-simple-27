const imageEffect = document.querySelector('.img-upload__preview img');
const userForm = document.querySelector('.img-upload__form');
const effects = [
  {
    NAME: 'none',
    STYLE: 'none',
  },
  {
    NAME:'chrome',
    STYLE: 'grayscale',
  },
  {
    NAME: 'sepia',
    STYLE: 'sepia',
  },
  {
    NAME: 'marvin',
    STYLE: 'invert',
  },
  {
    NAME: 'phobos',
    STYLE: 'blur',
  },
  {
    NAME: 'heat',
    STYLE: 'brightness',
  }
];
let currentEffect = effects[0];

function onEffectChange(evt) {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = effects.find((effect) => effect.NAME === evt.target.value);
  imageEffect.className = '';
  imageEffect.style.filter = `${currentEffect.STYLE}`;
  imageEffect.classList.add(`effects__preview--${currentEffect.NAME}`);
}

function resetEffects() {
  imageEffect.style.filter = 'none';
}

userForm.addEventListener('change', onEffectChange);

export {resetEffects};

