function findSameLetters(string) {
  // Bir fonksiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir string veriyoruz.

  let input_list = string.split(''); // string.split('') ile stringi karakterlerine ayırıyoruz.

  let input_seen = []; // ilk tekrar eden karakteri saklayacağımız boş bir array oluşturuyoruz.

  let firstRecurringCharacter = null; // İlk tekrar eden karakteri tutacağımız bir değişken oluşturuyoruz. Başlangıçta null atıyoruz.

  // for döngüsü ile input_listteki her bir karaktere bakıyoruz.
  for (const element of input_list) {
    const currentCharacter = element; // currentCharacter değişkeni döngüdeki mevcut karakteri temsil ediyor.

    const found = input_seen.find(x => {
      return x === currentCharacter;
    }); // input_seen dizisinde currentCharacter değerine eşit bir karakter olup olmadığını kontrol ediyoruz.

    if (found !== undefined && firstRecurringCharacter === null) {
      firstRecurringCharacter = found;
    } // Eğer found undefined değilse ve firstRecurringCharacter hala null ise, bu karakteri firstRecurringCharacter değişkenine atıyoruz.

    input_seen.push(element); // Mevcut karakteri input_seen dizisine ekliyoruz.
  }
  return firstRecurringCharacter; // İlk tekrar eden karakteri döndürüyoruz.
}

console.log(findSameLetters('abcbc')); // Fonksiyonu 'abcbc' stringi ile test ediyoruz ve ilk tekrar eden karakteri konsola yazdırıyoruz.

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

function firstUnlimitedCharacter(string) {
  // fonksiyon oluşturuyoruz ve fonskiyona string değer atıyoruz

  for (const char of string) {
    // String içindeki her bir karakter için döngü oluşturuyoruz.
    if (string.split('').filter(c => c === char).length === 1) {
      // string.split('') ile stringi karakterlerine ayırıyoruz.
      // c burada stringin herhangi bir karakteri temsil ediyor
      // char burada ilk tekrar eden karakteri temsil ediyor
      // her bir karakteri char ile karşılaştırarak filtreliyoruz ve char ile aynı olan karakteri seçiyoruz
      // eğer seçilen karakter uzunluğu 1 e eşitse ilk benzersiz karakteri döndürüyoruz
      return char;
    }
  }
  return null; // eğer hiçbir karakter benzersiz değilse null döner
}
console.log(firstUnlimitedCharacter('swiss'));
console.log(firstUnlimitedCharacter('hello'));
console.log(firstUnlimitedCharacter('aabbcc'));
