function findEvenNumbers(array) {
  // bir fonskiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir dizi veriyoruz
  let evenNumbers = array.filter(number => number % 2 === 0);
  // Çift sayıları filtreliyoruz
  // Eğer bir sayı 2'ye bölündüğünde kalan 0 ise, bu sayı çift oluyor.

  if (evenNumbers.length === 0) return []; //eventNumbers eğer boşsa (yani hiç çift sayı yoksa), boş bir dizi döndürüyoruz.

  return evenNumbers; // çift sayıları döndürüyoruz
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(findEvenNumbers([11, 22, 33, 44])); // [22, 44]
console.log(findEvenNumbers([1, 3, 5, 7])); // []

function findEvenNumbers(array) {
  // bir fonskiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir dizi veriyoruz
  let evenNumbers = []; // çift sayıların geleceği boş bir dizi oluşturuyoruz

  for (let number of array) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  } // for döngüsü ile arraydeki her bir sayıya bakıyoruz ve eğer sayılar 2 ye bölündüğünde kalan 0 ise yani sıfıra eşitse çift sayı döndürüyoruz
  // Eğer sayı çift ise, evenNumbers dizisine ekleniyor
  return evenNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(findEvenNumbers([11, 22, 33, 44])); // [22, 44]
console.log(findEvenNumbers([1, 3, 5, 7])); // []
