function solveEquation(a, b, c) {
  let arr = [];
  const D = b ** 2 - 4 * a * c;
  if (D == 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(Number(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(Number(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(Number(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let P = percent / 12 / 100,
    S = amount - contribution,
    n = (date.getFullYear() - new Date().getFullYear()) * 12;
  totalAmount = (S * (P + (P / (((1 + P) ** n) - 1))) * n).toFixed(2);
  return parseFloat(totalAmount);
}