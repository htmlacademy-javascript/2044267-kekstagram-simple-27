const picturesElement = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content;

function createPicture(photos) {
  const fragment = document.createDocumentFragment();

  photos.forEach(({url, description, likes, comments}) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    fragment.appendChild(pictureElement);
  });

  picturesElement.appendChild(fragment);
}

export {createPicture};

