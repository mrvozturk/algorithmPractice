# İÇİNDEKİLER

- [useState Hook'u Mounting Aşamasında Nasıl Kullanılır, Nasıl Çalışır?](#usestate-hooku-mounting-aşamasında-nasıl-kullanılır-nasıl-çalışır)
- [useEffect Hook'u Mounting Aşamasında Nasıl Çalışır, Kullanılır?](#useeffect-hooku-mounting-aşamasında-nasıl-çalışır-kullanılır)
- [useState Hook'u Updating Aşamasında Nasıl Kullanılır, Nasıl Çalışır?](#usestate-hooku-updating-aşamasında-nasıl-kullanılır-nasıl-çalışır)
- [useEffect Hook'u Updating Aşamasında Nasıl Çalışır, Nasıl Kullanılır?](#useeffect-hooku-updating-aşamasında-nasıl-çalışır-nasıl-kullanılır)
- [useMemo Hook'u Updating Aşamasında Nasıl Kullanılır, Nasıl Çalışır?](#usememo-hooku-updating-aşamasında-nasıl-kullanılır-nasıl-çalışır)
- [useCallback Hook'u Updating Aşamasında Nasıl Çalışır, Nasıl Kullanılır?](#usecallback-hooku-updating-aşamasında-nasıl-çalışır-nasıl-kullanılır)
- [useEffect Hook'u Unmounting Aşamasında Nasıl Çalışır, Nasıl Kullanılır?](#useeffect-hooku-unmounting-aşamasında-nasıl-çalışır-nasıl-kullanılır)
- [React'ta Bileşenlerin Gereksiz Yere Yeniden Render Edilmesini Nasıl Önlersiniz?](#reactta-bileşenlerin-gereksiz-yere-yeniden-render-edilmesini-nasıl-önlersiniz)
- [Büyük Veri Listelerini Render Ederken Performansı Artırmak İçin Hangi Teknikleri Kullanırsınız?](#büyük-veri-listelerini-render-ederken-performansı-artırmak-için-hangi-teknikleri-kullanırsınız)
- [useMemo ve useCallback Arasındaki Farklar](#usememo-ve-usecallback-arasındaki-farklar)
- [componentDidMount Yaşam Döngüsü Metodu Nedir, Ne Zaman Kullanılır?](#componentdidmount-yaşam-döngüsü-metodu-nedir-ne-zaman-kullanılır)
- [componentDidUpdate Yaşam Döngüsü Metodu Nedir, Ne Zaman Kullanılır?](#componentdidupdate-yaşam-döngüsü-metodu-nedir-ne-zaman-kullanılır)
- [componentWillUnmount Yaşam Döngüsü Metodu Nedir, Ne Zaman Kullanılır?](#componentwillunmount-yaşam-döngüsü-metodu-nedir-ne-zaman-kullanılır)
- [Bir Bileşen Kaldırıldığında (Unmount) Bir Event Listener'ı useEffect Cleanup Fonksiyonu Kullanarak Nasıl Kaldırırsınız?](#bir-bileşen-kaldırıldığında-unmount-bir-event-listenerı-useeffect-cleanup-fonksiyonu-kullanarak-nasıl-kaldırırsınız)
- [componentWillUnmount Metodunun Kullanımı ile İlgili Dikkat Edilmesi Gereken Önemli Noktalar Nelerdir?](#componentwillunmount-metodunun-kullanımı-ile-ilgili-dikkat-edilmesi-gereken-önemli-noktalar-nelerdir)
- [componentWillUnmount Metodunu Kullanarak Bir Bileşenin Kaldırılması Sırasında Bir Event Listener'ı Nasıl Temizlersiniz?](#componentwillunmount-metodunu-kullanarak-bir-bileşenin-kaldırılması-sırasında-bir-event-listenerı-nasıl-temizlersiniz)
- [componentWillUnmount ile useEffect Hook'unda Yazılan Cleanup Fonksiyonu Arasındaki Fark Nedir?](#componentwillunmount-ile-useeffect-hookunda-yazılan-cleanup-fonksiyonu-arasındaki-fark-nedir)
- [useEffect Hook'unda Bir Temizleme Fonksiyonu Nasıl Yazılır, Bu Fonksiyon Ne Zaman Çalışır?](#useeffect-hookunda-bir-temizleme-fonksiyonu-nasıl-yazılır-bu-fonksiyon-ne-zaman-çalışır)
- [Bir Çocuk Bileşene Prop Olarak Geçirilen Bir Fonksiyonun Referansını useCallback ile Nasıl Optimize Edersiniz?](#bir-çocuk-bileşene-prop-olarak-geçirilen-bir-fonksiyonun-referansını-usecallback-ile-nasıl-optimize-edersiniz)
- [useState, useEffect ve Diğer React Hook'larını Performans Optimizasyonu İçin Nasıl Kullanırsınız?](#usestate-useeffect-ve-diğer-react-hooklarını-performans-optimizasyonu-için-nasıl-kullanırsınız)
- [useState Hook'u Next.js Projelerinde Ne İçin Kullanılır?](#usestate-hooku-nextjs-projelerinde-ne-için-kullanılır)
- [useEffect Hook'unu Next.js Projelerinde Ne Zaman Kullanırsınız?](#useeffect-hookunu-nextjs-projelerinde-ne-zaman-kullanırsınız)
- [useMemo Hook'u Next.js Projelerinde Nasıl, Neden Kullanılır?](#usememo-hooku-nextjs-projelerinde-nasıl-neden-kullanılır)
- [useCallback Hook'unu Next.js Projelerinde Ne Zaman Kullanırsınız?](#usecallback-hookunu-nextjs-projelerinde-ne-zaman-kullanırsınız)
- [useCallback Hook'u Next.js Projelerinde Nasıl Kullanılır?](#usecallback-hooku-nextjs-projelerinde-nasıl-kullanılır)
- [useRef Hook'u Next.js Projelerinde Ne İçin Kullanılır?](#useref-hooku-nextjs-projelerinde-ne-için-kullanılır)
- [Next.js'de Sayfa Yükleme Sürelerini Azaltmak İçin Hangi Teknikleri Kullanırsınız?](#nextjsde-sayfa-yükleme-sürelerini-azaltmak-için-hangi-teknikleri-kullanırsınız)
- [Next.js'de Dinamik Import Nasıl Yapılır ve Performans Optimizasyonu İçin Ne Gibi Avantajlar Sağlar?](#nextjsde-dinamik-import-nasıl-yapılır-ve-performans-optimizasyonu-için-ne-gibi-avantajlar-sağlar)
- [Next.js'de Resim Optimizasyonu Nasıl Yapılır?](#nextjsde-resim-optimizasyonu-nasıl-yapılır)
- [next/image Bileşeninin Performans Optimizasyonuna Katkıları Nelerdir?](#nextimage-bileşeninin-performans-optimizasyonuna-katkıları-nelerdir)
- [getStaticPaths Fonksiyonunu Kullanarak Performansı Nasıl Optimize Edersiniz?](#getstaticpaths-fonksiyonunu-kullanarak-performansı-nasıl-optimize-edersiniz)
- [getStaticProps ve getServerSideProps Fonksiyonları Arasındaki Farklar Nelerdir, Hangisinin Performans Açısından Avantajları Vardır?](#getstaticprops-ve-getserversideprops-fonksiyonları-arasındaki-farklar-nelerdir-hangisinin-performans-açısından-avantajları-vardır)

## useState Hook'u Mounting Aşamasında Nasıl Kullanılır, Nasıl Çalışır?

- useState hook'u, bir bileşenin mount aşamasında, bileşen ilk kez DOM'a eklendiğinde başlangıç değerini ayarlayarak state yönetimini sağlar ve state'i güncellemek için bir fonksiyon döner. Durum her güncellendiğinde bileşen yeniden render edilir

## useEffect Hook'u Mounting Aşamasında Nasıl Çalışır, Kullanılır?

- useEffect hook'u, bir bileşenin mount aşamasında, bileşen ilk kez render edildiğinde çalışarak yan etkilerin (side effects) yönetimini sağlar, örneğin veri fetch işlemleri gerçekleştirilir. Mounting aşamasında çalışması için bağımlılık dizisi (dependency array) boş bırakılır ([]).

```js
useEffect(() => {
  /* Yan etkiler */
}, []);
```

## useState Hook'u Updating Aşamasında Nasıl Kullanılır, Nasıl Çalışır?

- useState hook'u, bir bileşenin updating aşamasında, state güncelleme fonksiyonu çağrıldığında bileşeni yeniden render ederek state'i günceller ve yeni state değerini döner

## useEffect Hook'u Updating Aşamasında Nasıl Çalışır, Nasıl Kullanılır?

- useEffect hook'u, bir bileşenin updating aşamasında, bağımlılık dizisindeki değerler değiştiğinde çalışarak yan etkilerin (side effects) yönetimini sağlar, örneğin belirli state veya prop değerleri değiştiğinde yan etkiler gerçekleştirilir.

```js
useEffect(() => {
  // side effect
}, [state, props]);
```

## useMemo Hook'u Updating Aşamasında Nasıl Kullanılır, Nasıl Çalışır?

- useMemo hook'u, hesaplanmış değerleri (computed values) saklar. Bağımlılık dizisindeki (dependency array) değerler değiştiğinde useMemo hesaplama yapar ve yeniden hesaplanan değeri döner, böylece gereksiz hesaplamalar önlenir, örneğin, büyük veri setlerinin işlenmesi veya karmaşık matematiksel işlemler

```js
const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);
```

## useCallback Hook'u Updating Aşamasında Nasıl Çalışır, Kullanılır?

- useCallback hook'u, işlev referanslarını (function references) saklar. Bağımlılık dizisindeki (dependency array) değerler değiştiğinde useCallback yeni bir geri çağrım fonksiyonu döner, böylece gereksiz yeniden oluşturma işlemleri önlenir, örneğin, bir buton tıklama işlevinin referansı buttonId bağımlılığına bağlıdır.

```js
const memoizedCallback = useCallback(() => {
  // işlev içeriği
}, [count, items]);
```

## useEffect Hook'u Unmounting Aşamasında Nasıl Çalışır, Kullanılır?

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

## React'ta Bileşenlerin Gereksiz Yere Yeniden Render Edilmesini Nasıl Önlersiniz?

- React.memo,useMemo,useCallback

## Büyük Veri Listelerini Render Ederken Performansı Artırmak İçin Hangi Teknikleri Kullanırsınız?

- useMemo,useCallback,windowing

## useMemo ve useCallback Arasındaki Farklar

- useMemo hesaplanmış değerleri (computed values) saklar ve bağımlılık dizisi (dependency array) değişmediğinde yeniden hesaplamaz; örneğin, bir listeyi filtrelerken items ve searchTerm bağımlılık dizisi kullanılır. useCallback işlev referanslarını (function references) saklar ve bağımlılık dizisi değişmediğinde işlevi yeniden oluşturmaz; örneğin, bir buton tıklama işlevinin referansı buttonId bağımlılığına bağlıdır

## componentDidMount Yaşam Döngüsü Metodu Nedir, Ne Zaman Kullanılır?

- componentDidMount: Bileşen ilk kez render edildikten sonra çalışır; veri yükleme veya başlangıç ayarları için kullanılır.

## componentDidUpdate Yaşam Döngüsü Metodu Nedir, Ne Zaman Kullanılır?

- componentDidUpdate: Bileşen güncellendiğinde çalışır; önceki props veya state ile karşılaştırarak güncelleme sonrası işlemler yapar.

## componentWillUnmount Yaşam Döngüsü Metodu Nedir, Ne Zaman Kullanılır?

- componentWillUnmount: Bileşen kaldırılmadan önce çalışır; temizlik (cleanup) işlemleri yapar. Örneğin, setInterval veya setTimeout ile başlatılan zamanlayıcıları clearInterval veya clearTimeout ile temizler, olay dinleyicilerini removeEventListener ile kaldırır ve API veya WebSocket bağlantılarını sonlandırır.

## Bir Bileşen Kaldırıldığında (Unmount) Bir Event Listener'ı useEffect Cleanup Fonksiyonu Kullanarak Nasıl Kaldırırsınız?

- Bir bileşen kaldırıldığında (unmount) bir event listener'ı useEffect cleanup fonksiyonu ile kaldırmak için, useEffect içinde addEventListener ekleyip, cleanup fonksiyonunda removeEventListener ile kaldırırsınız.

## componentWillUnmount Metodunun Kullanımı ile İlgili Dikkat Edilmesi Gereken Önemli Noktalar Nelerdir?

- componentWillUnmount metodu, bileşen unmount edilmeden önce "cleanup" işlemleri gerçekleştirir; event listener'lar, API abonelikleri ve zamanlayıcılar (setInterval/setTimeout) gibi kaynaklar serbest bırakılır. Bu, bellek sızıntılarını (memory leaks) önler ve uygulamanın performansını korur.

## componentWillUnmount Metodunu Kullanarak Bir Bileşenin Kaldırılması Sırasında Bir Event Listener'ı Nasıl Temizlersiniz?

- componentWillUnmount metodunu kullanarak, bir bileşenin kaldırılması sırasında bir event listener'ı temizlemek için, componentDidMount içinde eklediğiniz event listener'ı componentWillUnmount içinde removeEventListener ile kaldırırsınız. Bu işlem, bellek sızıntılarını (memory leaks) önler.

## componentWillUnmount ile useEffect Hook'unda Yazılan Cleanup Fonksiyonu Arasındaki Fark Nedir?

- componentWillUnmount: Sınıf bileşenlerinde, bileşen kaldırılmadan önce çalışır ve event listener'lar, API abonelikleri ve zamanlayıcılar (setInterval/setTimeout) gibi kaynakları serbest bırakır.

- useEffect: İşlevsel bileşenlerde, cleanup fonksiyonu bağımlılık dizisi (dependency array) değiştiğinde veya bileşen unmount olduğunda çalışır ve event listener'ları, API aboneliklerini ve zamanlayıcıları temizler.

## useEffect Hook'unda Bir Temizleme Fonksiyonu Nasıl Yazılır, Bu Fonksiyon Ne Zaman Çalışır?

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

## Bir Çocuk Bileşene Prop Olarak Geçirilen Bir Fonksiyonun Referansını useCallback ile Nasıl Optimize Edersiniz?

- Bir çocuk bileşene prop olarak geçirilen handleClick işlevinin referansını useCallback ile optimize etmek için, işlevi useCallback içinde tanımlayıp bağımlılık dizisinde ([dependency]) belirli değişkenler vererek, bu işlevin referansını yalnızca bağımlılıklar değiştiğinde yeniden oluşturursunuz.

```js
const handleClick = useCallback(() => {
  // Tıklama işlevi
}, [dependency]); // `dependency` değiştiğinde işlev yeniden oluşturulur

<ChildComponent onClick={handleClick} />;
```

## useState, useEffect ve Diğer React Hook'larını Performans Optimizasyonu İçin Nasıl Kullanırsınız?

- useState: Durum (state) güncellemeleri sadece ilgili bileşeni yeniden render eder, gereksiz render işlemlerini önler.

- useEffect: Yan etkileri (side effects) kontrol ederek, bağımlılıklar (dependencies) değişmediğinde etkileri yeniden çalıştırmaz ve böylece performansı artırır.

- useMemo: Hesaplanmış değerleri (computed values) memoize ederek, bağımlılıklar değişmediğinde tekrar hesaplama yapmaz.

- useCallback: İşlev referanslarını (function references) memoize ederek, bağımlılıklar değişmediğinde işlevleri yeniden oluşturmaz ve gereksiz yeniden renderları önler.

## useState Hook'u Next.js Projelerinde Ne İçin Kullanılır?

- useState Hook'u: Next.js projelerinde, bileşenlerin yerel durumunu (local state) yönetmek için kullanılır ve durum güncellemeleri (state updates) yalnızca ilgili bileşeni yeniden render eder.böylece performansı optimize eder.

## useEffect Hook'unu Next.js Projelerinde Ne Zaman Kullanırsınız?

- useEffect Hook'u: Next.js projelerinde veri çekme, API entegrasyonları ve yan etkileri (side effects) yönetmek için kullanılır; bileşen render edildikten sonra çalışır ve bağımlılık dizisine (dependency array) bağlı olarak tetiklenir

## useMemo Hook'u Next.js Projelerinde Nasıl, Neden Kullanılır?

- useMemo Hook'u: Next.js projelerinde, ağır hesaplamalar (karmaşık matematiksel işlemler) ve büyük veri setlerini (çok sayıda öğe içeren veri koleksiyonları) sadece bağımlılıklar değiştiğinde yeniden hesaplamak için kullanılır. Bu, performansı artırır ve gereksiz render işlemlerini önler. Hook, hesaplamayı useMemo içinde tanımlayıp bağımlılık dizisini (dependencies array) belirterek kullanılır.

## useCallback Hook'unu Next.js Projelerinde Ne Zaman Kullanırsınız?

- useCallback Hook'u: Next.js projelerinde, fonksiyonların bağımlılıklar (dependencies) değişmediğinde yeniden oluşturulmasını önlemek için kullanılır; bu, gereksiz render işlemlerini ve performans kayıplarını önler.Örneğin, bir buton tıklama işlevi veya event handler'ı yalnızca bağımlılıklar değiştiğinde yeniden oluşturulur

## useCallback Hook'u Next.js Projelerinde Nasıl Kullanılır?

- useCallback Hook'u: Next.js projelerinde, fonksiyonları yalnızca bağımlılıklar değiştiğinde yeniden oluşturmak için useCallback(() => { /_ fonksiyon _/ }, [dependency]) şeklinde kullanılır.

## useRef Hook'u Next.js Projelerinde Ne İçin Kullanılır?

- useRef Hook'u: Next.js projelerinde, DOM öğelerine erişim ve bileşenler arasında değişmeyen mutable referanslar oluşturmak için kullanılır.

## Next.js'de Sayfa Yükleme Sürelerini Azaltmak İçin Hangi Teknikleri Kullanırsınız?

- **SSG (Static Site Generation)**:`getStaticProps` ile sayfaları önceden oluşturma.
- **SSR (Server-Side Rendering)**: `getServerSideProps` ile sayfaları sunucu tarafında oluşturma.
- **Dinamik İçe Aktarım (Dynamic Imports)**: `import()` kullanarak büyük dosyaları ihtiyaç duyuldukça yükleme.
- **Lazy Loading**: `React.lazy` ve `Suspense` ile bileşenleri bölerek yükleme.
- **Image Optimization**: `next/image` bileşeni ile resimleri optimize etme.
- **Pre-fetching**: Link bileşeninde `prefetch` özelliğini kullanarak sayfaları önden yükleme.

## Next.js'de Dinamik Import Nasıl Yapılır, Performans Optimizasyonu İçin Ne Gibi Avantajlar Sağlar?

- Next.js'de dinamik import, import() fonksiyonu ile belirli modülleri ihtiyaç duyulduğunda yükleyerek, başlangıçta yüklenen dosya boyutlarını azaltır ve böylece sayfa yükleme sürelerini hızlandırır.

## Next.js'de Resim Optimizasyonu Nasıl Yapılır?

- Next.js'de resim optimizasyonu: next/image bileşenini kullanarak resim optimizasyonu yapabilirsiniz.

## next/image Bileşeninin Performans Optimizasyonuna Katkıları Nelerdir?

- next/image bileşeni, resimleri otomatik olarak optimize ederek, lazy loading ile yalnızca gerektiğinde yükleyerek ve farklı cihazlara uygun boyutlarda sunarak sayfa yükleme sürelerini hızlandırır.

## getStaticPaths Fonksiyonunu Kullanarak Performansı Nasıl Optimize Edersiniz?

- getStaticPaths fonksiyonu: Next.js'de dinamik sayfaları build sırasında statik olarak oluşturur, böylece sayfa yükleme sürelerini azaltır ve sunucu üzerindeki yükü hafifletir, performansı optimize eder.

## getStaticProps ve getServerSideProps Fonksiyonları Arasındaki Farklar Nelerdir, Hangisinin Performans Açısından Avantajları Vardır?

- getStaticProps: Sayfaları build sırasında statik olarak oluşturur, hızlı yükleme süreleri ve düşük sunucu yükü sağlar. Performans açısından avantajlıdır.

- getServerSideProps: Her istekte sunucuda dinamik olarak sayfa oluşturur, her istekte yeniden oluşturulduğu için daha az performanslıdır. Dinamik veri gereksinimleri için uygundur.

- getStaticProps, sayfaları önceden oluşturduğu için daha hızlı yükleme süreleri ve daha az sunucu yükü ile performans açısından avantajlıdır.
