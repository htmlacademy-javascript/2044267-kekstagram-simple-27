function getRandomNum(min, max) {
  const str = NaN;
  if (min > max) {
    [min, max] = [max, min];
  } // проверка на соответствие порядка входных данных
  if (min === null || max === null) {
    return str;
  } // проверка на соответствие входных данных с null

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(1, 10));
console.log(getRandomNum(10, 1));
console.log(getRandomNum());

const str = 'Hello';
function valid(s, n) {
  return s.length === n;
}

console.log(valid(str, 5));
