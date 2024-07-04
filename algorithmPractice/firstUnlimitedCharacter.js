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
