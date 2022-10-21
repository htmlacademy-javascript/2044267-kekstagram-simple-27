function checkLenght(string, maxLenght) {
  return string.length <= maxLenght;
}

function getRandomNum(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
