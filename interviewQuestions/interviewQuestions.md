# React Hakkında

## İçindekiler

- [React Nedir?](#react-nedir)
- [React'ın Temel Özellikleri Nelerdir?](#reactın-temel-özellikleri-nelerdir)
  - [Bileşen Tabanlı Mimari](#bileşen-tabanlı-mimari)
  - [JSX](#jsx)
  - [Sanal DOM](#sanal-dom)
  - [Tek Yönlü Veri Akışı](#tek-yönlü-veri-akışı)
- [Virtual DOM Nedir ve Nasıl Çalışır?](#virtual-dom-nedir-ve-nasıl-çalışır)
- [React Hookları Nelerdir?](#react-hookları-nelerdir)
  - [useState](#usestate)
  - [useEffect](#useeffect)
- [React State Management Nasıl Yapılır?](#react-state-management-nasıl-yapılır)
- [Redux ve Context API Nedir?](#redux-ve-context-api-nedir)
- [Next.js Nedir?](#nextjs-nedir)
- [Next.js Temel Özellikleri Nelerdir?](#nextjs-temel-özellikleri-nelerdir)
- [SSR (Server-Side Rendering) ve CSR (Client-Side Rendering) Nedir?](#ssr-server-side-rendering-ve-csr-client-side-rendering-nedir)
- [SSR (Server-Side Rendering) ve CSR (Client-Side Rendering) Nedir?](#ssr-server-side-rendering-ve-csr-client-side-rendering-nedir)

- [Next.js ile SSR (Server Side Rendering) Example](#nextjs-ile-ssr-server-side-rendering-example)

- [React ile CSR (Client Side Rendering) Farkları](#react-ile-csr-client-side-rendering-farkları)

## React Nedir?

- React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir. Facebook tarafından geliştirilmektedir.

## React'ın Temel Özellikleri Nelerdir?

- **Bileşen Tabanlı Mimari**
- **JSX**
- **Sanal DOM**
- **Tek Yönlü Veri Akışı**

### Bileşen Tabanlı Mimari

- Kullanıcı arayüzlerini bağımsız, yeniden kullanılabilir bileşenler halinde oluşturma imkanı sağlar.

### JSX

- JavaScript içinde HTML benzeri kod yazmayı mümkün kılan bir sözdizimidir.

### Sanal DOM

- Gerçek DOM'un hafif bir kopyasıdır. React bileşenlerinde değişiklik olduğunda sadece güncellenen bölümü yeniden render ederek performans artırır.

### Tek Yönlü Veri Akışı

- Veri, üst bileşenden alt bileşene doğru akar, bu da bileşenlerin daha öngörülebilir ve anlaşılır olmasını sağlar.

## Virtual DOM Nedir ve Nasıl Çalışır?

- Virtual DOM, gerçek DOM'un hafif bir kopyasıdır. React bileşenlerinde değişiklik olduğunda sadece güncellenen bölümü yeniden render ederek performansı artırır. Bu sayede büyük ve karmaşık uygulamalarda bile hızlı ve verimli bir kullanıcı deneyimi sağlanır.

## React Hookları Nelerdir?

- React hookları, fonksiyon bileşenlerinde state ve yaşam döngüsü metotları kullanmayı sağlar. En yaygın kullanılan hooklar `useState` ve `useEffect`'tir.

### useState

- **useState:** Fonksiyon bileşenlerinde durum yönetimi için kullanılan bir yöntemdir. Bileşenin state'ini tanımlamayı ve güncellemeyi sağlar.

### useEffect

- **useEffect:** Fonksiyon bileşenlerinde yan etki yönetimi için kullanılan bir yöntemdir. Bileşenin yaşam döngüsü boyunca belirli işlemlerin gerçekleştirilmesini sağlar.

## React State Management Nasıl Yapılır?

- React'ta state management, bileşenler arasında veri paylaşımını ve uygulama durumunu yönetirken Context API global state'i daha basit bir şekilde sağlar. Daha karmaşık uygulamalar için Redux gibi kütüphaneler kullanılabilir.

## Redux ve Context API Nedir?

- **Redux:** Uygulama durumunu tek bir "store" içinde tutmak ve bu durumu yönetmek için "actions" ve "reducers" kullanmaktır. State yönetimi için kullanılan popüler bir kütüphanedir.
- **Context API:** React'in içerisinde bulunan ve bileşenler arasında veri paylaşımını kolaylaştıran bir özelliktir. Küçük ve orta ölçekli uygulamalarda global state yönetimi için kullanılabilir.

## Next.js Nedir?

- Next.js react tabanlı bir frameworktür.

## Next.js Temel Özellikleri Nelerdir?

- **Sunucu Taraflı Render**
- **Statik Site Oluşturma(SEO)**
- **API routes(rotaları)**
- **Otomatik Kod Bölme**
- **CSS ve Typescript gibi özellikleri performans ve SEO(statik site oluşturma)iyileştirirken geliştirme sürecini kolaylaştırır**

## SSR (Server-Side Rendering) ve CSR (Client-Side Rendering) Nedir?

- `SSR(Server Sider Rendering)` sayfa içeriğini sunucuda oluşturup tam `HTML` olarak tarayıcıya gönderilmesidir.
- `CSR(Client Side Rendering)` sayfa içeriğinin tarayıcıda javascript ile oluşturulmasıdır.

## SSR (Server-Side Rendering) ve CSR (Client-Side Rendering) Arasındaki Fark Nedir?

- `SSR` sayfa içeriğinin sunucuda oluşturulup tam `HTML` olarak tarayıcıya gönderir,bu da daha hızlı ilk yükleme ve `SEO` avantajı sağlar Kullanım alanı olarak e-ticaret örnek verilebilir. `CSR` ise içeriği tarayıcıda `Javascript` ile oluşturur, başlangıçta yavaş olabilir ama kullanıcı etkileşimlerinde daha hızlı çalışır.Kullanım alanları sosyal medya platformları gibi verilebilir.

## Next.js ile SSR (Server Side Rendering) Example

**Farkları:**

1. Veri sunucuda çekilir ve bileşen yüklendiğinde hazır olarak gelir.

2. Kullanıcı sayfayı açtığında içerik hemen görünür, bu da hızlı ilk yükleme sağlar.

3. SEO açısından daha avantajlıdır çünkü arama motorları tam HTML içeriğini görür.

```js
//React ve Next.js bileşenleri import ediyoruz.
import React from 'react';

//getServerSideProps fonksiyonu sayfa yüklendiğinde sunucu tarafında çalışır.
//Bu fonksiyon sunucuda veri çekme işlemlerini gerçekleştirmek için kullanılır

export async function getServerSideProps() {
  // fetch API fonksiyonu ile veri çekme işlemlerini gerçekleştiriyoruz.
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // veri sayfa bileşenine props olarak geçilir
  return {
    props: { data } // data props olarak bileşene aktarılır
  };
}

//Home bileşeni sunucuda çekilem veriyi görüntülemek için kullanılır
const Home = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      {/* sunucuda alınan veri JSON formatında ekranda gösterilir*/}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// home bileşeni varsayılan olarak dışa aktarılır

export default Home;
```

## React ile CSR (Client Side Rendering) Farkları

**Farkları:**

1. Veri istemci tarafında bileşen yüklendikten sonra çekilir.

2. Kullanıcı sayfayı açtığında içerik hemen görünmez, veri çekildikten sonra ekranda gösterilir

3. SEO açısından daha zayıftır çünkü arama motorlarının içeriği görebilmesi için Javascript'i çalıştırması gerekir.

```js
// React kütüphanesi import edilir
import React, { useState, useEffect } from 'react';

// App bileşnei tanımlandırılır
const App = () => {
  // useState ile data ve setData adında iki değişken tanımlanır
  const [data, setData] = useState(null);

  // useEffect hook'u ile bileşen yüklendiğinde çalışacak bir fonksiyon tanımlanır
  useEffect(() => {
    //Fetch API kullanarak veri çekme işlemi yapılır
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // boş bağımlılık dizisi,useEffect'in sadece bileşen yüklendikten sonra çalışmasını sağlar.
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      {/* sunucuda alınan veri JSON formatında ekranda gösterilir*/}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

//App bileşeni varsayılan olarak dışa aktarılır
export default App;
```
