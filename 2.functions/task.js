// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  for (let i = 0; i < arr.size(); i++) {
    if (i == 0) {
      min = arr[i];
      max = arr[i];
      sum = arr[i];
    } else {
      sum += arr[i];
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
    }
  }
  avg = sum / arr.size();
  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}