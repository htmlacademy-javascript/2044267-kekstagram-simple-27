import {photos} from './data.js';

const picturesListElement = src.querySelector('.picture__img');

const picturesTemplate = document.querySelector('#picture').content;

const picturesListFragment = document.createDocumentFragment();

photos.forEach(({img, likes, comments}) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute(url) = img;
  pictureElement.querySelector('.picture__likes').innerHTML = likes;
  pictureElement.querySelector('.picture__comments').innerHTML = comments;
  picturesListFragment.appendChild(pictureElement);
});

picturesListElement.appendChild(picturesListFragment);




