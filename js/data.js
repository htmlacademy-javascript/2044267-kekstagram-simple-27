import {getRandomNum} from './util.js';

function getData() {
  const fotos = [];

  for (let i = 1; i <= 25; i++) {
    const obj = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `nature${i}`,
      likes: getRandomNum(15, 200),
      comments: getRandomNum(0, 200)
    };

    fotos.push(obj);
  }

  return fotos;
}

getData();

export {getData};
