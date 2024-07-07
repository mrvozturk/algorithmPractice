function findEvenNumbers(array) {
  let positiveNumbers = array.filter(number => number % 2 === 0); 

  if (positiveNumbers.length === 0) return []; 
  return positiveNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(findEvenNumbers([11, 22, 33, 44]));
console.log(findEvenNumbers([1, 3, 5, 7]));
