# 🔥 Firebase Authentication: Giriş / Kayıt / Çıkış Sistemi

Bu proje, *Firebase Authentication* kullanarak email ve şifre ile kullanıcıların kayıt olmasını, giriş yapmasını ve çıkış işlemi gerçekleştirmesini sağlayan basit bir kimlik doğrulama sistemidir.

---

## 🌍 Proje Özellikleri

- Email ve şifre ile *kayıt olma*.
- Email ve şifre ile *giriş yapma*.
- Giriş sonrası *oturum yönetimi*.
- Kullanıcıların *çıkış yapması*.
- Tüm işlemler *Firebase Authentication* servisi üzerinden gerçekleşir.

---

## 🛠 Kullanılan Teknolojiler

- HTML (index.html)
- JavaScript (main.js)
- Firebase Authentication (Email/Password yöntemi)

---

## 🔧 Kurulum ve Çalıştırma Adımları

### 1. Firebase Projesi Oluşturun

- [Firebase Console](https://console.firebase.google.com/) üzerinden yeni bir proje oluşturun.
- Authentication sekmesine gidin ve *Email/Password* yöntemini aktif hale getirin.

### 2. Firebase Web Uygulaması Ekleyin

- Proje ayarlarında yeni bir Web Uygulaması oluşturun.
- Size verilen Firebase yapılandırmasını alın ve main.js dosyasına ekleyin.

Örnek yapılandırma:

javascript
const firebaseConfig = {
  apiKey: "API_KEYINIZ",
  authDomain: "proje-ismi.firebaseapp.com",
  projectId: "proje-ismi",
  storageBucket: "proje-ismi.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


### 3. SDK Bağlantılarını Ekleyin
index.html dosyanıza aşağıdaki Firebase SDK linklerini ekleyin:

html
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"></script>
<script src="main.js"></script>

Not: Firebase sürümünü güncel kullanmak için Firebase dokümantasyonundan kontrol edebilirsiniz.

### 🌟 Kullanım
index.html dosyasını tarayıcıda açın.

Kayıt formunu kullanarak yeni bir kullanıcı oluşturun.

Kayıt olduktan sonra giriş yaparak sisteme erişin.

Giriş yaptıktan sonra çıkış butonu ile oturumu kapatabilirsiniz.

### ⚠ Dikkat Edilmesi Gerekenler
Firebase Authentication servisinin aktif ve doğru yapılandırılmış olması gerekir.

API anahtarınızı gizli tutun; sadece istemci tarafında çalışan uygulamalarda kullanın.

Email/Password yöntemi Firebase Console'da aktif olmalıdır.

### 👩‍💻 Hazırlayanlar
Zeynep Merve Koyuncu

Sema Hacıbekiroğlu

Mihriban Melis Kömbe

### 📢 Projeyi Çalıştırmak İçin
bash
1. Proje dosyalarını bilgisayarınıza indirin veya kopyalayın.
2. Firebase yapılandırmanızı `main.js` dosyasına ekleyin.
3. `index.html` dosyasını tarayıcıda açın.
4. Kayıt olun, giriş yapın ve çıkış işlemlerini test edin.
