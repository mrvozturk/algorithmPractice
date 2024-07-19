## useState Hook'u Mounting Aşamasında Nasıl Kullanılır, Nasıl çalışır?

- useState Hook'u, bir bileşenin mount aşamasında başlangıç durumunu tanımlar ve bu durumu güncellemek için bir fonksiyon döner. Durum her güncellendiğinde bileşen yeniden render edilir

## useEffect Hook'u Mounting Aşamasında Nasıl Çalışır ve Kullanılır?

- useEffect, bileşen ilk kez render edildiğinde yan etki (side effect) gerçekleştirmek için kullanılır. Mounting aşamasında çalışması için bağımlılık dizisi (dependency array) boş bırakılır ([]).

```js
useEffect(() => {
  /* Yan etkiler */
}, []);
```

## useState Hook'u Updating Aşamasında Nasıl Kullanılır, nasıl çalışır?

- useState Hook'u, bileşen durumunu tanımlayıp günceller. Updating aşamasında, setState ile yeni değer atanır ve bileşen yeniden render edilerek React'in sanal DOM'u optimize edilir

## useEffect Hook'u Updating Aşamasında Nasıl Çalışır, nasıl kullanılır?

- useEffect Hook'u, bileşen güncellendiğinde yan etki (side effect) gerçekleştirmek için kullanılır. Updating aşamasında çalışması için bağımlılık dizisine (dependency array) durum veya props değişkenleri eklenir ([state, prop]).

```js
useEffect(() => {
  // side effect
}, [state, props]);
```

## useMemo Hook'u Updating Aşamasında Nasıl Kullanılır, nasıl çalışır?

- useMemo Hook'u, hesaplamalı değerleri saklayarak performansı artırır. Updating aşamasında, bağımlılık dizisinde (dependency array) durum (örneğin, count) veya prop (örneğin, items) gibi değişkenler belirtilir; bu değişkenler değiştiğinde hesaplama yeniden yapılır.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);
```

## useCallback Hook'u Updating Aşamasında Nasıl Çalışır, nasıl kullanılır?

- useCallback Hook'u, işlevin referansını memoize ederek (önceden hesaplanmış sonucu saklama) performansı artırır. Bu referans, işlevin bellekteki adresini temsil eder ve gereksiz yeniden oluşturmayı önler. Updating aşamasında, bağımlılık dizisinde belirtilen durum (count) veya prop (items) değiştiğinde referans güncellenir.

```js
const memoizedCallback = useCallback(() => {
  // işlev içeriği
}, [count, items]);
```

## useEffect Hook'u Unmounting Aşamasında Nasıl Çalışır, nasıl kullanılır?

- useEffect Hook'u, bileşen unmount edildiğinde temizlik (cleanup) yapar. Unmounting aşamasında, return ifadesiyle dönen işlev, addEventListener'ı removeEventListener ile kaldırarak bellek sızıntılarını önler. Bellek sızıntısı, kullanılmayan bellek alanlarının serbest bırakılmaması sonucu oluşur ve performansı düşürür

```js
useEffect(() => {
  const handleResize = () => {
    // resize işlevi
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

## useRef Hook'u Unmounting Aşamasında Nasıl Kullanılır, nasıl çalışır?

- useRef Hook'u, bileşen unmount edildiğinde temizlik işlemleri yapmak için kullanılabilir, ancak temizlik genellikle useEffect içinde yapılır. useRef, DOM elemanlarının veya değerlerin güncel referanslarını saklar.

## React'ta bileşenlerin gereksiz yere yeniden render edilmesini nasıl önlersiniz?

- React.memo,useMemo,useCallback

## Büyük veri listelerini render ederken performansı artırmak için hangi teknikleri kullanırsınız?

- useMemo,useCallback,windowing

## Context API kullanırken performansı artırmak için hangi yöntemleri kullanırsınız?

- Context API kullanırken performansı artırmak için yaygın olarak useMemo, React.memo ve Split Contexts yöntemleri kullanılır.

## useMemo ve useCallback Arasındaki farklar

- useMemo hesaplanmış değerleri (computed values) saklar ve bağımlılık dizisi (dependency array) değişmediğinde yeniden hesaplamaz; örneğin, bir listeyi filtrelerken items ve searchTerm bağımlılık dizisi kullanılır. useCallback işlev referanslarını (function references) saklar ve bağımlılık dizisi değişmediğinde işlevi yeniden oluşturmaz; örneğin, bir buton tıklama işlevinin referansı buttonId bağımlılığına bağlıdır

## componentDidMount yaşam döngüsü metodu nedir ve ne zaman kullanılır?

- componentDidMount: Bileşen ilk kez render edildikten sonra çalışır; veri yükleme veya başlangıç ayarları için kullanılır.

## componentDidUpdate yaşam döngüsü metodu nedir ve ne zaman kullanılır?

- componentDidUpdate: Bileşen güncellendiğinde çalışır; önceki props veya state ile karşılaştırarak güncelleme sonrası işlemler yapar.

## componentWillUnmount yaşam döngüsü metodu nedir ve ne zaman kullanılır?

- componentWillUnmount: Bileşen kaldırılmadan önce çalışır; temizlik (cleanup) işlemleri yapar. Örneğin, setInterval veya setTimeout ile başlatılan zamanlayıcıları clearInterval veya clearTimeout ile temizler, olay dinleyicilerini removeEventListener ile kaldırır ve API veya WebSocket bağlantılarını sonlandırır.

## Bir bileşen kaldırıldığında (unmount) bir event listener'ı useEffect cleanup fonksiyonu kullanarak nasıl kaldırırsınız?

- Bir bileşen kaldırıldığında (unmount) bir event listener'ı useEffect cleanup fonksiyonu ile kaldırmak için, useEffect içinde addEventListener ekleyip, cleanup fonksiyonunda removeEventListener ile kaldırırsınız.

## componentWillUnmount metodunun kullanımı ile ilgili dikkat edilmesi gereken önemli noktalar nelerdir?

- componentWillUnmount metodu, bileşen unmount edilmeden önce "cleanup" işlemleri gerçekleştirir; event listener'lar, API abonelikleri ve zamanlayıcılar (setInterval/setTimeout) gibi kaynaklar serbest bırakılır. Bu, bellek sızıntılarını (memory leaks) önler ve uygulamanın performansını korur.

## componentWillUnmount metodunu kullanarak bir bileşenin kaldırılması sırasında bir event listener'ı nasıl temizlersiniz?

- componentWillUnmount metodunu kullanarak, bir bileşenin kaldırılması sırasında bir event listener'ı temizlemek için, componentDidMount içinde eklediğiniz event listener'ı componentWillUnmount içinde removeEventListener ile kaldırırsınız. Bu işlem, bellek sızıntılarını (memory leaks) önler.

## componentWillUnmount ile useEffect Hook'unda yazılan cleanup fonksiyonu arasındaki fark nedir?

- componentWillUnmount: Sınıf bileşenlerinde, bileşen kaldırılmadan önce çalışır ve event listener'lar, API abonelikleri ve zamanlayıcılar (setInterval/setTimeout) gibi kaynakları serbest bırakır.

- useEffect: İşlevsel bileşenlerde, cleanup fonksiyonu bağımlılık dizisi (dependency array) değiştiğinde veya bileşen unmount olduğunda çalışır ve event listener'ları, API aboneliklerini ve zamanlayıcıları temizler.

## useEffect Hook'unda bir temizleme fonksiyonu nasıl yazılır ve bu fonksiyon ne zaman çalışır?

- useEffect Hook'unda temizleme fonksiyonu, useEffect'ten döndürülür ve bağımlılık dizisi (dependency array) değiştiğinde veya bileşen unmount olduğunda çalışır; genellikle event listener'ları, API aboneliklerini ve zamanlayıcıları (setInterval/setTimeout) temizlemek için kullanılır

```js
// useEffect Hook'unda temizleme fonksiyonunu yazmak için, useEffect'in içinde bir işlev tanımlanır ve bu işlev return ifadesi ile döndürülür
useEffect(
  () => {
    // Etki (side effect) kodu burada

    // Temizleme fonksiyonu
    return () => {
      // Temizleme işlemleri burada yapılır
    };
  },
  [
    /* bağımlılıklar */
  ]
);
```

## Bir çocuk bileşene prop olarak geçirilen bir fonksiyonun referansını useCallback ile nasıl optimize edersiniz?

- Bir çocuk bileşene prop olarak geçirilen handleClick işlevinin referansını useCallback ile optimize etmek için, işlevi useCallback içinde tanımlayıp bağımlılık dizisinde ([dependency]) belirli değişkenler vererek, bu işlevin referansını yalnızca bağımlılıklar değiştiğinde yeniden oluşturursunuz.

```js
const handleClick = useCallback(() => {
  // Tıklama işlevi
}, [dependency]); // `dependency` değiştiğinde işlev yeniden oluşturulur

<ChildComponent onClick={handleClick} />;
```

## useState, useEffect ve diğer React Hook'larını performans optimizasyonu için nasıl kullanırsınız?

- useState: Durum (state) güncellemeleri sadece ilgili bileşeni yeniden render eder, gereksiz render işlemlerini önler.

- useEffect: Yan etkileri (side effects) kontrol ederek, bağımlılıklar (dependencies) değişmediğinde etkileri yeniden çalıştırmaz ve böylece performansı artırır.

- useMemo: Hesaplanmış değerleri (computed values) memoize ederek, bağımlılıklar değişmediğinde tekrar hesaplama yapmaz.

- useCallback: İşlev referanslarını (function references) memoize ederek, bağımlılıklar değişmediğinde işlevleri yeniden oluşturmaz ve gereksiz yeniden renderları önler.

## useState hook'u Next.js projelerinde ne için kullanılır?

- useState Hook'u: Next.js projelerinde, bileşenlerin yerel durumunu (local state) yönetmek için kullanılır ve durum güncellemeleri (state updates) yalnızca ilgili bileşeni yeniden render eder.böylece performansı optimize eder.

## useEffect hook'unu Next.js projelerinde ne zaman kullanırsınız?

- useEffect Hook'u: Next.js projelerinde veri çekme, API entegrasyonları ve yan etkileri (side effects) yönetmek için kullanılır; bileşen render edildikten sonra çalışır ve bağımlılık dizisine (dependency array) bağlı olarak tetiklenir

## useMemo hook'u Next.js projelerinde nasıl ve neden kullanılır?

- useMemo Hook'u: Next.js projelerinde, ağır hesaplamalar (karmaşık matematiksel işlemler) ve büyük veri setlerini (çok sayıda öğe içeren veri koleksiyonları) sadece bağımlılıklar değiştiğinde yeniden hesaplamak için kullanılır. Bu, performansı artırır ve gereksiz render işlemlerini önler. Hook, hesaplamayı useMemo içinde tanımlayıp bağımlılık dizisini (dependencies array) belirterek kullanılır.

## useCallback hook'unu Next.js projelerinde ne zaman kullanırsınız?

- useCallback Hook'u: Next.js projelerinde, fonksiyonların bağımlılıklar (dependencies) değişmediğinde yeniden oluşturulmasını önlemek için kullanılır; bu, gereksiz render işlemlerini ve performans kayıplarını önler.Örneğin, bir buton tıklama işlevi veya event handler'ı yalnızca bağımlılıklar değiştiğinde yeniden oluşturulur

## useCallback hook'u Next.js projelerinde nasıl kullanılır?

- useCallback Hook'u: Next.js projelerinde, fonksiyonları yalnızca bağımlılıklar değiştiğinde yeniden oluşturmak için useCallback(() => { /_ fonksiyon _/ }, [dependency]) şeklinde kullanılır.

## useRef hook'u Next.js projelerinde ne için kullanılır?

- useRef Hook'u: Next.js projelerinde, DOM öğelerine erişim ve bileşenler arasında değişmeyen mutable referanslar oluşturmak için kullanılır.

## Next.js'de sayfa yükleme sürelerini azaltmak için hangi teknikleri kullanırsınız?

- Next.js'de sayfa yükleme sürelerini azaltmak için: Statik Site Oluşturma (SSG), Sunucu Tarafı Render (SSR), kod ayırma (code splitting), tembel yükleme (lazy loading), önbellekleme (caching) ve CDN kullanımı tekniklerini kullanabilirsiniz.

## Next.js'de dinamik import nasıl yapılır ve performans optimizasyonu için ne gibi avantajlar sağlar?

- Next.js'de dinamik import: next/dynamic ile bileşenleri dinamik olarak yükleyin; bu, başlangıç yükleme süresini azaltır ve performansı artırır. Dinamik import, başlangıç paket boyutunu küçültür ve kritik olmayan bileşenleri sadece ihtiyaç duyulduğunda yükleyerek kullanıcı deneyimini iyileştirir.

## Next.js'de resim optimizasyonu nasıl yapılır?

- Next.js'de resim optimizasyonu: next/image bileşenini kullanarak resim optimizasyonu yapabilirsiniz.

## next/image bileşeninin performans optimizasyonuna katkıları nelerdir?

- next/image bileşeni: Resimleri otomatik olarak boyutlandırarak, uygun formatlara dönüştürerek ve sadece görünür olduğunda yükleyerek (lazy loading) sayfa yükleme sürelerini azaltır

## getStaticPaths fonksiyonunu kullanarak performansı nasıl optimize edersiniz?

- getStaticPaths fonksiyonu: Next.js'de dinamik sayfaları build sırasında statik olarak oluşturur, böylece sayfa yükleme sürelerini azaltır ve sunucu üzerindeki yükü hafifletir, performansı optimize eder.

## getStaticProps ve getServerSideProps fonksiyonları arasındaki farklar nelerdir ve hangisinin performans açısından avantajları vardır?

- getStaticProps: Sayfaları build sırasında statik olarak oluşturur, hızlı yükleme süreleri ve düşük sunucu yükü sağlar. Performans açısından avantajlıdır.

- getServerSideProps: Her istekte sunucuda dinamik olarak sayfa oluşturur, her istekte yeniden oluşturulduğu için daha az performanslıdır. Dinamik veri gereksinimleri için uygundur.

- getStaticProps, sayfaları önceden oluşturduğu için daha hızlı yükleme süreleri ve daha az sunucu yükü ile performans açısından avantajlıdır.
