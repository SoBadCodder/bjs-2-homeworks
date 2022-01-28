function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item % 3 === 0 && item > 0).map(item => item * 10);
  return resultArr; // array
}