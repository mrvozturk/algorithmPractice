function longestConsecutive(array) {
  // bir fonskiyon oluşturuyoruz ve bu fonksiyona parametre olarak bir dizi veriyoruz
  if (array.length === 0) return 0; // eğer dizi sıfıra eşitse 0 döndürüyoruz
  array.sort((a, b) => a - b); // diziyi küçükten büyüğe sıralıyoruz
  maxLength = 1; // en uzun ardisik dizi uzunluklarını bulmak için bir değişken tanımlıyoruz
  currentLength = 1; //mevcut ardisik dizi uzunluklarını bulmak için bir değişken tanımlıyoruz

  for (let i = 1; i < array.length; i++) {
    // ardışık dizi uzunluklarını bulmak için döngüye alıyoruz ve ardışık dizileri buluyoruz
    if (array[i] === array[i - 1] + 1) {
      // Eğer şu anki eleman bir önceki elemandan bir fazlaysa
      currentLength++; // Mevcut diziyi bir arttır
    } else if (array[i] !== array[i - 1]) {
      // Eğer elemanlar aynı değilse
      currentLength = 1; // Mevcut ardışık dizi uzunluğunu sıfırla
    }

    if (currentLength > maxLength) {
      // Eğer mevcut uzunluk en büyük uzunluktan daha büyükse, en büyük uzunluk olarak güncelle.

      maxLength = currentLength; // En büyük uzunluk, şu anki ardışık dizinin uzunluğuna eşittir.
    } else {
      currentLength = 1; // Değilse, mevcut ardışık dizi uzunluğunu sıfırla ve yeni bir ardışık diziyi başlat.
    }
  }
  return maxLength; // En uzun ardışık dizi uzunluğunu döndür.
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2,])); // Çıktı: 4
console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 5, 207])); // Çıktı: 5
console.log(longestConsecutive([1, 2, 3, 4, 5])); // Çıktı: 5
