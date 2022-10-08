function random(min, max) {
  if (min > max) [min, max] = [max, min]; // проверка на соответствие порядка входных данных
  if (min == null || max == null) return "null"; // проверка на соответствие входных данных с null
  let arr = []; // создание пустого массива
  min += 1; // увиличение мин числа для соответствия диапазона
  for (min; min < max; min++) {
    arr.push(min);
  } // цикл для наполнения массива числами из диапазона

  let randomInd = Math.floor(Math.random() * arr.length); // генерация рандомного числа для индекса массива
  return arr[randomInd]; // возврат результата
}

console.log(random(1, 10));
console.log(random(10, 1));
console.log(random());

// function valid(str, n) {
//   return str.length == n;
// }

// console.log(valid("Hello", 5));
