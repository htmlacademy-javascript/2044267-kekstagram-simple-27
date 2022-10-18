// функция для проверки максимальной длины строки
// function check(string, maxLenght) {
//   return string.length <= maxLenght;
// }



// ДЗ


// на основе написанных по заданию ранее вспомогательных функций напишите 
// необходимые функции для создания массива из 25 сгенерированных объектов. 
// Каждый объект массива — описание фотографии, опубликованной пользователем


// функция должна выполнять цикл 25 раз который добавляет к массиву каждый раз один объект



// это пустой массив
let foto = []

// моя функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNum(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция, которая создает массив из 25 сгенерированных объектов
let getArr= function () {  
  // цикл добавляющий 1 объект 
  for (i = 0; i <= 25; i++) {
// это объект 
    let obj = { 
        id: 1,
        url: photos/1.jpg, 
        description: nature,
        likes: getRandomInt(15, 200),
        comments: getRandomInt(0, 200)
      }
// в теле цикла метод push - добавляет неогр колво элементов в конец массива
        foto.push(obj)
    }
  }



// вызов функции
getArr();

// вывод массива в консоль
console.log(foto);