### Big O Notasyonu Açıklamaları

Big O notasyonu, bir algoritmanın performansını (zaman veya alan karmaşıklığını) büyüyen veri boyutuna göre ölçmek için kullanılır.

#### Döngü Yapısı

Döngülerin iç içe olup olmadığı veya sırayla çalışıp çalışmadığı zaman karmaşıklığını belirlemede kritik rol oynar.

#### Veri Yapıları

Kullanılan veri yapısının (örneğin `Set`, `Map`, `Array`) nasıl çalıştığına dair bilgi, zaman karmaşıklığını belirlemeye yardımcı olur. Örneğin, bir `Set` içinde bir elemanı kontrol etmek `O(1)` zaman karmaşıklığına sahipken, bir dizide (`Array`) bir eleman aramak `O(n)` zaman karmaşıklığına sahiptir.

### İç İçe Döngüler

`containsCommonItem` ve `containsCommonItem3` fonksiyonlarında iç içe döngüler veya iç içe çalışan metotlar vardır, bu nedenle zaman karmaşıklıkları `O(a * b)`'dir.

### Sırayla Çalışan Döngüler

`containsCommonItem2` fonksiyonunda ise döngüler sırayla çalışır, bu nedenle zaman karmaşıklığı `O(a + b)`'dir, bu da genellikle daha verimlidir.

- **Worst Case (En Kötü Durum):** En kötü senaryoya göre analiz yapılır.
- **Remove Constants (Sabitleri Çıkar):** Sabit katsayıları dikkate alma, çünkü büyük veri kümelerinde etkileri ihmal edilebilir.
- **Different Terms for Inputs (Girdiler İçin Farklı Terimler):** Birden fazla farklı girdi varsa, her biri için ayrı ayrı terimler kullan (örneğin, `O(n * m)` gibi).
- **Drop Non-Dominants (Baskın Olmayanları Çıkar):** Karmaşıklığı en çok etkileyen terimi bırak, geri kalanları ihmal et (örneğin, `O(n² + n)` ifadesinde `O(n²)` baskın olduğu için `O(n)` terimini çıkar).

# Fonksiyonlar

#### Constant Loop (Sabit Zamanlı) (O(1)) Fonksiyon:

- `compressFirstBox`fonksiyonu dizinin ilk elemanını konsola yazdırırken sabit zamanlı (O(1)) bir işlem yapmaktadır.Arrayin ilk elamınını yazdırır

```js
function compressFirstBox(boxes) {
  console.log(boxes[0]);
}
```

## Linear-For loops while loops O(n):

- - Fonksiyon, verilen boxes dizisini iki kez döngüyle dolaşır ve her bir elemanı konsola iki kez yazdırır. Her döngü bağımsız olarak çalıştığından toplam işlem süresi O(2n)'dir, ancak Big-O notasyonunda bu O(n) olarak sadeleştirilir.Boxes dizisindeki her eleman tekrar konsola yazılır

```js
function compressBoxesTwice(boxes) {
  // İlk forEach döngüsü, boxes dizisindeki her bir elemanı tek tek konsola yazdırır
  boxes.forEach(function (box) {
    console.log(box); // boxes dizisindeki her bir eleman konsola yazdırılır
  });

  // İkinci forEach döngüsü, boxes dizisindeki her bir elemanı tekrar konsola yazdırır
  boxes.forEach(function (box) {
    console.log(box); // boxes dizisindeki her bir eleman tekrar konsola yazdırılır
  });
}
```

## Karmaşıklık, kuadratik zaman (quadratic time) O(n²)

- İkinci dereceden - bir koleksiyondaki her öğenin diğer öğelerle karşılaştırılması gerekir. İç içe geçmiş iki döngü. Bu fonksiyon, verilen boxes dizisindeki tüm olası eleman çiftlerini konsola yazdırır. Zaman karmaşıklığı O(n²)'dir, çünkü dizideki her eleman için diğer tüm elemanlarla birlikte bir çift oluşturulup konsola yazdırılır. Bu tür bir işlem genellikle büyük dizilerde oldukça maliyetli olabilir..Tüm olası çiftleri konsola yazdırır

```js
function logAllPairsOfBoxes(boxes) {
  boxes.forEach(function (firstBox) {
    boxes.forEach(function (secondBox) {
      console.log(firstBox, secondBox);
    });
  });
}
```

- 3 farklı yöntemle nemoyu bulabiliriz

```js
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}
```

```js
findNemo(everyone);

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  });
};
```

```js
const findNemo3 = array => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
};
```

## JavaScript Set: has() Yöntemiyle Öğeyi Kontrol Etme

- Set örneklerinin has() yöntemi, belirtilen değere sahip bir öğenin bu kümede mevcut olup olmadığını belirten bir boole değeri döndürür.

```js
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false

// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
```

- Farklı veri yapıları, farklı türdeki görevler için optimize edilmiştir; örneğin, diziler (arrays), yığınlar (stacks), kuyruklar (queues), bağlantılı listeler (linked lists), ağaçlar (trees) ve grafikler (graphs) gibi.
  Veri yapıları, algoritmaların performansını büyük ölçüde etkiler. Bu nedenle, doğru veri yapısını seçmek, bir yazılımın hızını ve verimliliğini artırabilir.

**Math.pow**: `Math.pow` fonksiyonu, üslü sayılarla işlemler yapmak için kullanılır ve base sayısını exponent kadar üste yükseltir.

**Veri Yapısı**: Bir veri yapısı, bir veri düzenlemesidir. Bu verilerle etkileşim şeklinizi ve RAM'de nasıl düzenlendiğini tanımlayabilirsiniz. Dolayısıyla, RAM'deki bazı veri yapıları birbirinin hemen yanında, bazıları ise birbirinden ayrı olarak düzenlenmiştir ve erişim ve hak konusunda farklı artı ve eksileri vardır. Amacımız, CPU'nun bilgi yazması için bilgiyi alması için yapmamız gereken işlemi en aza indirmektir.

**string.push('e')**: Bir dizinin sonuna yeni bir eleman ekler

**string.pop()**: Dizinin son elemanını kaldırır ve bu elemanı döndürür

**string.unshift('x')**: Bir dizinin başına yeni bir eleman ekler

**string.splice(2,0,'alien')**: Dizinin belirli bir konumuna yeni eleman eklemek veya var olan elemanları kaldırmak için kullanılır

**string.slice(2,0,'alien')**: Dizinin belirli bir bölümünü yeni bir dizi olarak döndürür. Bu metod orijinal diziyi değiştirmez.

## Differences Between Reference and Value Types(Referans ve Değer Türleri Arasındaki Farklar)

```js
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
```

- object1 ve object3 birbirinden bağımsız iki nesnedir ve her ikisi de { value: 10 } değerini tutar. Ancak, object2, object1'in bir referansıdır. Yani object2, object1 ile aynı nesneye işaret eder.

## Context ve Scope:

```js
const object4 = {
  a: function () {
    console.log(this);
  }
};
```

- This bir fonksiyonun içinde hangi nesnenin referans alındığını belirtir.

## OOP (Nesne Yönelimli Programlama)

- Yazılım geliştirmeyi daha düzenli ve modüler hale getirmek için kullanılan bir programlama paradigmasıdır.

### OOP Temel Prensipleri

1. Sarmalama (Encapsulation):
2. Kalıtım (Inheritance)
3. Çok Biçimlilik (Polymorphism)
