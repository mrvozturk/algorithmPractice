function ayniharfleribul(string) {
  // Bir fonksiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir string veriyoruz.

  let input_list = string.split(''); // string.split('') ile stringi karakterlerine ayırıyoruz.

  let input_seen = []; //ilktekraredenkarakteri saklayacağımız boş bir array oluşturuyoruz.

  let ilktekraredenkarakter = null; // Ilk tekrar eden karakteri tutacağımız bir değişken oluşturuyoruz.Başlangıçta null atıyoruz.

  // for döngüsü ile input_listteki her bir karaktere bakıyoruz.
  for (let i = 0; i < input_list.length; i++) {
    const findableChar = input_list[i]; //findableChar değişkeni döngüdeki mevcut karakteri temsil ediyor. Döngü içierisindeki mevcut karakteri findableChar değişkenine atıyoruz.

    const found = input_seen.find(x => {
      return x == findableChar;
    }); // input_seen dizisinde findableChar değerine eşit bir karakter olup olmadığını kontrol ediyoruz.

    if (found !== undefined && ilktekraredenkarakter === null) {
      ilktekraredenkarakter = found;
    } // Eğer found undefined değilse ve ilktekraredenkarakter hala null ise,Bu karakteri ilktekraredenkarakter değişkenine atıyoruz.

    input_seen.push(input_list[i]); // Mevcut karakteri input_seen dizisine ekliyoruz.

    // input_seen de ki karakterler ile input_listteki karakterle uyuşan varmı bakılır
    // findableChar degerinin input_seen icerisinde varligi kontrol edilir.
  }
  return ilktekraredenkarakter; // İlk tekrar eden karakteri döndürüyoruz.
}

console.log(ayniharfleribul('abcbc')); // Fonksiyonu 'abcbc' stringi ile test ediyoruz ve ilk tekrar eden karakteri konsola yazdırıyoruz.
