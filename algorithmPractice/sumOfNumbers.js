function sumOfNumbers(array) {
  // bir fonksiyon oluşturuyoruz ve bu fonskiyona parametre olarak bir dizi veriyoruz
  let sum = 0; // toplamını tutmak için bir değişken tanımlıyoruz
  for (const elementh of array) // diziye döngüye alıyoruz
    sum += elementh; // her bir elemanı topluyoruz
  return sum; // toplamı döndürüyoruz
}
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
