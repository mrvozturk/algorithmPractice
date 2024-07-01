function ayniharfleribul(string) {
  // Bir fonksiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir string veriyoruz.

  let input_list = string.split(''); // string.split('') ile stringi karakterlerine ayırıyoruz.

  let input_seen = []; //ilktekraredenkarakteri saklayacağımız boş bir array oluşturuyoruz.

  let ilktekraredenkarakter = null; // Ilk tekrar eden karakteri tutacağımız bir değişken oluşturuyoruz.Başlangıçta null atıyoruz.

  // for döngüsü ile input_listteki her bir karaktere bakıyoruz.
  for (const element of input_list) {
    const findableChar = element; //findableChar değişkeni döngüdeki mevcut karakteri temsil ediyor. Döngü içierisindeki mevcut karakteri findableChar değişkenine atıyoruz.

    const found = input_seen.find(x => {
      return x == findableChar;
    }); // input_seen dizisinde findableChar değerine eşit bir karakter olup olmadığını kontrol ediyoruz.

    if (found !== undefined && ilktekraredenkarakter === null) {
      ilktekraredenkarakter = found;
    } // Eğer found undefined değilse ve ilktekraredenkarakter hala null ise,Bu karakteri ilktekraredenkarakter değişkenine atıyoruz.

    input_seen.push(element); // Mevcut karakteri input_seen dizisine ekliyoruz.

    // input_seen de ki karakterler ile input_listteki karakterle uyuşan varmı bakılır
    // findableChar degerinin input_seen icerisinde varligi kontrol edilir.
  }
  return ilktekraredenkarakter; // İlk tekrar eden karakteri döndürüyoruz.
}

console.log(ayniharfleribul('abcbc')); // Fonksiyonu 'abcbc' stringi ile test ediyoruz ve ilk tekrar eden karakteri konsola yazdırıyoruz.

function enKüçükEksikPozitifTamSayı(dizi) {
  // fonksiyon dizi adında bir parametre alır
  let pozitifsayılar = dizi.filter(numara => numara > 0);
  // dizi içerisindeki pozitif sayıları filtreler ve pozitifsayılar adında bir dizi oluşturur
  if (pozitifsayılar.length === 0) return 1;
  // pozisitifsayılar dizisinin uzunluğu 0 ise 1'i döndürecek
  pozitifsayılar.sort((a, b) => a - b);
  // pozitifsayılar dizisini sıralar küçükten büyüğe sıralama gerçekleştirir
  let eksik = 1; // eksik degeri bulmak için değişken tanımlıyoruz

  for (let value of pozitifsayılar) {
    // pozitifsayılar dizisini döngüye alıp pozitif tam sayıyı alıyoruz
    // value değişkeni pozitifsayılar dizisindeki her bir elemanı temsil eder
    if (value !== eksik) {
      // value değeri eksik değerine eşit değilse
      // eksik değeri bulduğumuz eksik pozitif tam sayıyı temsil eder.

      return eksik; // eksik değeri döndürecek
    }

    // Eğer value, eksik değerine eşitse, eksik değeri bir artırarak devam ederiz.
    eksik++; // eksik = pozitifler[i] + 1;
  }
  // Döngü sonunda eksik değeri, dizideki tüm pozitif tam sayılar sıralı olduğunda bir sonraki eksik tam sayıyı temsil eder.
  return eksik;
}

console.log(enKüçükEksikPozitifTamSayı([-3, -2, -1, 0, 1])); // Çıktı: 2
