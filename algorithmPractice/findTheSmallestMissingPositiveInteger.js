function findTheSmallestMissingPositiveInteger(array) {
  //bir fonskiyon oluşturuyoruz ve bu fonkisyona parametre olarak dizi veriyoruz
  let positiveNumbers = array.filter(number => number > 0); //dizi içerisindeki pozitif sayıları filtreliyoruz

  if (positiveNumbers.lenght === 0) return 1; // eğer dizi uzunluğu 0 ise 1 döndürüyoruz

  positiveNumbers.sort((a, b) => a - b); //pozitif sayıları küçükten büyüğe sıralıyoruz
  let missing = 1; //missing değerini bulmak için değişken tanımlıyoruz

  for (let value of positiveNumbers) {
    // pozitif sayıları döngüye alıp tek tek kontrol ediyoruz
    if (value !== missing) {
      //value değeri missing değerine kesin eşit değilse
      return missing; //missing değerini döndürüyoruz
    }
    missing++; //Eğer value missing değerine eşitse, missing değerini bir artırarak devam ediyoruz
  }
  return missing;
}
console.log(findTheSmallestMissingPositiveInteger([-3, -2, -1, 1]));
console.log(findTheSmallestMissingPositiveInteger([1, 2, 0]));
console.log(findTheSmallestMissingPositiveInteger([3, 4, -1, 1]));
