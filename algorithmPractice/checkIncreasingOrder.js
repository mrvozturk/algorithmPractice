function checkIncreasingOrder(array) {
  // bir fonksiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir dizi veriyoruz
  for (let i = 0; i < array.length - 1; i++) {
    // dizideki elemanları tek tek kontrol ediyoruz
    if (array[i] >= array[i + 1]) {
      // eğer i değeri i+1'den büyük veya eşitse
      return false; // dizi artan sırada değil ise false döndürüyoruz
    }
  }
  return true; // dizi artan sıradaysa true döndürüyoruz
}
console.log(checkIncreasingOrder([1, 2, 3, 4, 5])); // true
console.log(checkIncreasingOrder([1, 3, 2, 4, 5])); //false
console.log(checkIncreasingOrder([10, 20, 30, 40])); //true
console.log(checkIncreasingOrder([5, 4, 3, 2, 1])); // false
