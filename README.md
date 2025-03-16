# 🌐 Sosyal Medya Platformu + React - Redux

Bu proje, kullanıcıların içerik paylaşabileceği, arkadaşlarıyla bağlantı kurabileceği ve çeşitli sosyal medya etkileşimlerini gerçekleştirebileceği modern bir **React** tabanlı sosyal medya platformudur.

## 🚀 Başlarken

### 1. Gerekli Bağımlılıkların Kurulumu
Projeyi çalıştırmadan önce, aşağıdaki komutu çalıştırarak bağımlılıkları yükleyin:
```bash
npm install
```

### 2. Çevresel Değişkenlerin Ayarlanması
Backend API bağlantınızı yapılandırmak için `.env` dosyasına şu bilgileri ekleyin:
```
REACT_APP_API_URL=http://your-api-endpoint.com
```

### 3. Uygulamayı Çalıştırma
Projeyi geliştirme ortamında çalıştırmak için:
```bash
npm start
```

Uygulama varsayılan olarak şu adreste çalışır:
```
http://localhost:3000/
```

### 4. Üretim için Derleme
Üretim ortamı için projeyi derlemek için:
```bash
npm run build
```

## 🎯 Özellikler

- **Kullanıcı Profili**: Kullanıcılar kendi profillerini oluşturabilir ve düzenleyebilir.
- **Gönderi Oluşturma ve Paylaşma**: Kullanıcılar gönderiler oluşturabilir ve paylaşabilir.
- **Arkadaş Listesi**: Diğer kullanıcılarla bağlantı kurabilir ve arkadaş listesine ekleyebilir.
- **Bildirimler**: Yeni bağlantılar, mesajlar ve gönderiler hakkında bildirimler alır.
- **Galeri**: Fotoğraf ve medya paylaşımını destekleyen galeri özelliği.
- **Ayarlar**: Kullanıcıların hesap, gizlilik ve sistem ayarlarını yönetmesi.

## ✅ TODO Listesi

### Yapılanlar
- ✅ Kullanıcı giriş ve çıkış işlemleri.
- ✅ Kullanıcı profili oluşturma ve düzenleme.
- ✅ Arkadaş ekleme ve bağlantı kurma.
- ✅ Gönderi paylaşma ve galeri özelliği.
- ✅ Bildirim sistemi entegrasyonu.

### Yapılacaklar
- 🔄 **Mesajlaşma sistemi geliştirme.**
- 🔄 Kullanıcı etkinlik kayıtlarının detaylandırılması.
- 🔄 Realtime (gerçek zamanlı) özellikler için WebSocket entegrasyonu.
- 🔄 Gelişmiş arama özellikleri ekleme (kullanıcı ve gönderi bazlı).

## 📂 Proje Yapısı

```plaintext
src/
├── pages/
│   ├── notfound.js       # 404 sayfası
│   ├── home.js           # Ana sayfa
│   ├── widgets.js        # Ek araçlar sayfası
│   ├── widgets2.js       # Ek araçlar (devam)
│   ├── mycolor.js        # Tema renkleri yönetimi
│   ├── login.js          # Kullanıcı giriş sayfası
│   ├── users.js          # Kullanıcı listesi
│   ├── clients.js        # Bağlantılar ve arkadaşlar
│   ├── question.js       # Soru sayfası (belirli konular için)
│   ├── message.js        # Mesajlaşma sistemi (Henüz tamamlanmadı)
│   ├── gallery.js        # Fotoğraf ve video galerisi
│   ├── logs.js           # Etkinlik kayıtları
│   ├── profile.js        # Profil düzenleme sayfası
│   ├── setting.js        # Hesap ve sistem ayarları
├── App.js                 # Ana yönlendirme yapısı
├── index.js               # Uygulama giriş noktası
```

## 🖥️ Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **React Router**: Çoklu sayfa desteği ve yönlendirme.
- **JavaScript (ES6)**: Modern JavaScript özellikleri.
- **CSS**: Stil yönetimi.
- **Backend API**: Tüm veri işlemleri için.

## 📄 Lisans
Bu proje MIT lisansı altında sunulmuştur. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.

## 📫 İletişim

Herhangi bir sorunuz veya öneriniz varsa, benimle iletişime geçebilirsiniz:

- **GitHub:** [ebuenesy2](https://github.com/ebuenesy2)  
- **Email:** ebuenesy2@gmail.com  
- **LinkedIn:** [Ebu Enes Yıldırım](https://www.linkedin.com/in/ebuenesyildirim/)

