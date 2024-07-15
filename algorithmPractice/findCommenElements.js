function findCommonElements(array1, array2) {
    // bir fonskiyon oluşturuyoruz ve bu fonksiyona parametre olarak iki dizi veriyoruz
    let commonElements = []; // iki dizi arasında ortak elemanları tutmak için bir değişken tanımlıyoruz
  
    for (let i of array1) {
      // iki dizi arasında döngüye alıyoruz
      if (array2.includes(i)) {
        // Eğer iki dizide aynı eleman varsa
        commonElements.push(i); // ortak elemanı commonElements dizisine ekliyoruz
      }
    }
  
    return commonElements; // ortak elemanları döndürüyoruz
  }
  
  console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]