import {getRandomNum} from './util.js';

function getData() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const obj = {
      id: i,
      url: 'https://via.placeholder.com/182',
      description: `nature${i}`,
      likes: getRandomNum(15, 200),
      comments: getRandomNum(0, 200)
    };

    photos.push(obj);
  }

  return photos;
}

const data = getData();

export {data};
