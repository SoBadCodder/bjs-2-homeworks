// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  for (let i = 0; i < arr.length; i++) {
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
  avg = parseFloat((sum / arr.length).toFixed(2));
  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max) max=arr[i];
    if(arr[i] < min) min=arr[i];
  }
  return Math.abs(min - max);
}