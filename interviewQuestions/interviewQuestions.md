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
  - [useState ve useEffect Nedir?](#usestate-ve-useeffect-nedir)
- [React State Management Nasıl Yapılır?](#react-state-management-nasıl-yapılır)
  - [Redux ve Context API Nedir?](#redux-ve-context-api-nedir?)

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

### useState ve useEffect Nedir?

- **useState:** Fonksiyon bileşenlerinde durum yönetimi için kullanılan bir yöntemdir. Bileşenin state'ini tanımlamayı ve güncellemeyi sağlar.
- **useEffect:** Fonksiyon bileşenlerinde yan etki yönetimi için kullanılan bir yöntemdir. Bileşenin yaşam döngüsü boyunca belirli işlemlerin gerçekleştirilmesini sağlar.

## React State Management Nasıl Yapılır?

- React'ta state management, bileşenler arasında veri paylaşımını ve uygulama durumunu yönetirken Context API global state'i daha basit bir şekilde sağlar. Daha karmaşık uygulamalar için Redux gibi kütüphaneler kullanılabilir.

### Redux ve Context API Nedir?

- **Redux:** Uygulama durumunu tek bir "store" içinde tutmak ve bu durumu yönetmek için "actions" ve "reducers" kullanmaktır. State yönetimi için kullanılan popüler bir kütüphanedir.
- **Context API:** React'in içerisinde bulunan ve bileşenler arasında veri paylaşımını kolaylaştıran bir özelliktir. Küçük ve orta ölçekli uygulamalarda global state yönetimi için kullanılabilir.
