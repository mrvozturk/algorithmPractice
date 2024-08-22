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

**Sarmalama (Encapsulation)**:Sarmalama, bir sınıfın verilerini ve metotlarını bir araya getirerek, bu verilere dışarıdan doğrudan erişimi kısıtlar. Bu, veri güvenliği ve modülerlik sağlar.

```js
class Car {
  constructor(model, year) {
    this.model = model; // özellik
    this.year = year; // özellik
  }

  displayInfo() {
    // metod
    console.log(`Bu araba bir ${this.year} model ${this.model}.`);
  }
}

const myCar = new Car('Toyota Corolla', 2021);
myCar.displayInfo(); // Bu araba bir 2021 model Toyota Corolla.
```

**Kalıtım (Inheritance)**:Kalıtım, bir sınıfın (alt sınıf) başka bir sınıftan (üst sınıf) özellikleri ve metodları miras almasını sağlar. Bu, kod tekrarını azaltır ve ilişkili nesneler arasında ilişki kurmayı kolaylaştırır.

```js
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} başlatılıyor...`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Üst sınıfın constructor'ını çağırır
    this.model = model;
  }

  displayInfo() {
    console.log(`Bu araç bir ${this.brand} ${this.model}.`);
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Toyota başlatılıyor...
myCar.displayInfo(); // Bu araç bir Toyota Corolla.
```

**Çok Biçimlilik (Polymorphism)**:Çok biçimlilik, farklı sınıfların aynı arayüzü farklı şekillerde uygulamasına olanak tanır. Bu, sınıflar arası etkileşimi esnek hale getirir.

```js
class Animal {
  speak() {
    console.log('Hayvan ses çıkarıyor.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Hav hav!');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Miyav miyav!');
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

const myDog = new Dog();
const myCat = new Cat();

makeAnimalSpeak(myDog); // Hav hav!
makeAnimalSpeak(myCat); // Miyav miyav!
```

### super() Fonksiyonu ve OOP'deki Rolü

- Bu fonksiyon, bir sınıfın üst sınıfındaki (yani miras aldığı sınıfın) constructor'ını veya metotlarını çağırmak için kullanılır

**Constructor İçinde**: Bir sınıf başka bir sınıftan türetilmişse (miras almışsa), alt sınıfın constructor'ında üst sınıfın constructor'ını çağırmak için super() kullanılır.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Animal sınıfının constructor'ını çağırır
    this.breed = breed;
  }
}

let dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.name); // "Buddy"
console.log(dog.breed); // "Golden Retriever"
```

**Metotlarda**:Alt sınıfın metotları içinden üst sınıfın metotlarını çağırmak için kullanılabilir

```js
class Animal {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Animal sınıfının speak metotunu çağırır
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Buddy');
dog.speak();
// "Buddy makes a noise."
// "Buddy barks."
```

## JavaScript'te Özel Dizi Yapısı Oluşturmak

```js
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
}

const newArray = new MyArray();
console.log(newArray.get(0));
```

- **`this.length = 0;`** — Bu özellik, dizinin uzunluğunu izler.
- **`this.data = {};`** — Bu özellik, dizi elemanlarını saklamak için bir nesne olarak kullanılır.
- **`get(index) Metodu:`** — Bu metod, belirtilen indexe karşılık gelen data öğesini döndürür.
- **`newArray.get(0):`** — Bu ifade, `newArray` nesnesinde 0 indexine karşılık gelen değeri almak için `get` metodunu çağırır. Ancak, bu aşamada `data` henüz boş olduğundan `undefined` dönecektir.

## "JavaScript'te String Tersine Çevirme: İki Farklı Yöntem"

```js
function reverse(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}
```

1. **Yöntem**
   - **Kontroller:** Stringin boş olup olmadığını, bir string türünde olup olmadığını ve uzunluğunun en az 2 olup olmadığını kontrol eder.
   - **Döngü Kullanımı:** `totalItems` değişkeni kullanılarak, döngü en son karakterden başlatılır.
   - **Diziye Ekleme:** `for` döngüsü, stringin son karakterinden başlayarak ilk karakterine kadar geri gider ve her karakteri `backwards` adlı boş bir diziye ekler.
   - **String Birleştirme:** `backwards` dizisi, `join()` fonksiyonu ile birleşir ve ters çevrilmiş string olarak döndürülür.

```js
const reverse3 = str => [...str].reverse().join('');
```

2. **Yöntem**

- **Spread Operatörü Kullanımı:** `(...str)` — Stringi karakterlerine ayırır ve yeni bir dizi oluşturur.
- **Diziyi Ters Çevirme:** Diziyi ters çevirir ve yeniden stringe dönüştürür.

**Spread operatörü (...)**:JavaScript'te dizileri veya nesneleri genişletmek (spread) veya birleştirmek (merge) için kullanılan bir sentaks özelliğidir.Diziler veya nesneler gibi iteratif yapılardaki tüm öğeleri tek tek alarak başka bir yapıya yaymak için kullanılır.

## JavaScript'te Spread Operatörü Temel Kullanım Alanları

1. Combining Array Elements (Dizi Elemanlarını Birleştirme)

- Spread operatörü, birden fazla diziyi tek bir diziye birleştirmek için kullanılabilir

```js
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

2. Copying Arrays(Dizi Kopyalama)

- Spread operatörü, bir dizinin yüzeysel (shallow) bir kopyasını oluşturmak için kullanılabilir

```js
const original = [1, 2, 3];
const copy = [...original];
copy.push(4); // Orijinal dizi değişmez
console.log(copy); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3]
```

3. Function Arguments (Fonksiyon Argümanları)

- Spread operatörü diziyi bireysel argümanlara ayırır

```js
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

4. Copying and Merging Objects (Nesne Kopyalama ve Birleştirme)

- Bu, nesnelerin özelliklerini kopyalamak veya birden fazla nesneyi birleştirmek için kullanışlıdı

```js
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, location: 'New York', age: 31 };
console.log(updatedUser); // { name: 'John', age: 31, location: 'New York' }
```

5. Converting Strings to Arrays(Stringleri Diziye Dönüştürme)

- Bir stringi, spread operatörü ile karakterlerine ayırarak bir diziye dönüştürebilirsiniz

```js
const greeting = 'Hello';
const chars = [...greeting];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']
```

## JavaScript'te 'typeof' Operatörü ile Veri Türlerini Belirleme

- `typeof operatörü`, JavaScript'te bir değerin veri türünü belirlemek için kullanılan bir operatördür.

* `console.log(typeof "Hello");` // "string"

  - **"string"**: Metinsel değerler için.

* `console.log(typeof 42);` // "number"

  - **"number"**: Sayısal değerler için.

* `console.log(typeof true);` // "boolean"

  - **"boolean"**: Mantıksal (true veya false) değerler için.

* `console.log(typeof {});` // "object"

  - **"object"**: Nesneler, diziler ve null için. Null değerinin "object" olarak dönmesi JavaScript'te bilinen bir tasarım tuhaflığıdır.

* `console.log(typeof undefined);` // "undefined"

  - **"undefined"**: Değeri atanmamış bir değişken için.

* `console.log(typeof null);` // "object"

  - **"object"**: Bu, JavaScript'te bilinen bir tuhaflıktır; null aslında bir nesne değildir, ancak "object" olarak döner.

* `console.log(typeof function(){});` // "function"

  - **"function"**: Fonksiyonlar için. JavaScript'te fonksiyonlar birinci sınıf nesnelerdir ve kendi başlarına bir veri türü olarak kabul edilirler.

* `console.log(typeof Symbol());` // "symbol"

  - **"symbol"**: ES6 ile tanıtılan, benzersiz ve değiştirilemez veri türü için.

* `console.log(typeof 10n);` // "bigint"
  - **"bigint"**: Çok büyük tam sayıları temsil etmek için kullanılan bir tür.
