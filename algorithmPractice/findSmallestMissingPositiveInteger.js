function findSmallestMissingPositiveInteger(array) {
  // Bir fonksiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir dizi veriyoruz.

  let positiveNumbers = array.filter(number => number > 0); // Dizi içerisindeki pozitif sayıları filtreler ve positiveNumbers adında bir dizi oluşturur.

  if (positiveNumbers.length === 0) return 1; // Eğer positiveNumbers dizisinin uzunluğu 0 ise 1 döndürür.

  positiveNumbers.sort((a, b) => a - b); // positiveNumbers dizisini küçükten büyüğe sıralar.

  let missing = 1; // missing değerini bulmak için bir değişken tanımlıyoruz.

  for (let value of positiveNumbers) {
    // positiveNumbers dizisini döngüye alıp her bir pozitif tam sayıyı kontrol ediyoruz.
    if (value !== missing) {
      // value değeri missing değerine eşit değilse
      return missing; // missing değerini döndürüyoruz.
    }
    missing++; // Eğer value missing değerine eşitse, missing değerini bir artırarak devam ediyoruz.
  }
  return missing; // Döngü sonunda missing değeri, dizideki tüm pozitif tam sayılar sıralı olduğunda bir sonraki eksik tam sayıyı temsil eder.
}

console.log(findSmallestMissingPositiveInteger([-3, -2, -1, 0, 1])); // Fonksiyonu [-3, -2, -1, 0, 1] dizisi ile test ediyoruz ve sonucu konsola yazdırıyoruz.

