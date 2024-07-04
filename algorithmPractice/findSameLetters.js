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
