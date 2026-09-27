# Web Angela

Angela Yu'nun **The Complete Web Development Bootcamp** kursu kapsamında yaptığım alıştırmalar, proje ödevleri ve mini projelerin toplandığı depo. Saf HTML/CSS ile başlayıp Bootstrap, Flexbox/Grid, DOM/jQuery ve Node.js/Express tabanlı backend konularına kadar ilerleyen bir öğrenim yolculuğunu içeriyor.

## İçerik

### Frontend Temelleri (HTML & CSS)
Numaralandırılmış bölüm klasörleri (`2.1`, `2.2`, ... `11.3`), her biri kendi konusuna ait `index.html` alıştırması ve `solution.html` çözümünü içerir:

- HTML temelleri: başlıklar, paragraflar, listeler, bağlantılar, görseller, dosya yolları
- CSS temelleri: seçiciler, renkler, box model, cascade, positioning, float
- Responsive tasarım: media query, flexbox, grid
- Bootstrap ile bileşen kullanımı
- Mini projeler: **Birthday Invite**, **Movie Ranking**, **Motivation Meme**, **CSS Flag**, **Mondrian Art**, **TinDog** (tanıtım sitesi), **Web Design Agency**, **Flexbox Pricing Table**

### JavaScript & DOM
- `DOM Challenge Starting Files`, `Drum Kit Starting Files`, `Simon Game Challenge Starting Files`, `Dicee Challenge - Starting Files`
- `JQuery` — jQuery ile DOM manipülasyonu alıştırmaları

### Backend (Node.js / Express)
`Backend/` klasörü, sunucu taraflı geliştirmeye giriş alıştırmalarını içerir:

- Node.js temelleri, native modüller, NPM
- Express sunucuları, middleware, HTTP istekleri
- EJS şablon motoru (tag'ler, veri aktarımı, partials)
- REST API tasarımı, Axios ile API tüketimi, harici API'lerle kimlik doğrulama
- PostgreSQL ile veri okuma/yazma (**Travel Tracker**, **Permalist**)
- Oturum yönetimi, cookie'ler ve kullanıcı kimlik doğrulama seviyeleri (Lv.1 → Lv.3, Google OAuth dahil)

### Kapsam Projeleri (Capstone)
- **Blog Web App** — EJS + Express tabanlı blog uygulaması
- **Book Notes** — PostgreSQL destekli kitap notları uygulaması
- **Public API Capstone Project** — harici API entegrasyonu
- **World Capital Quiz** — quiz uygulaması
- **Personal Website Project** — kişisel portföy sayfası

### Diğer
- `Git/` — Git alıştırmaları

## Kullanılan Teknolojiler

HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · Node.js · Express · EJS · PostgreSQL

## Notlar

- Backend alıştırmalarını yerelde çalıştırmak için ilgili proje klasöründe `npm install` çalıştırılmalı ve gerekiyorsa örnek bir `.env` dosyası (`SESSION_SECRET`, `PG_USER`, `PG_PASSWORD` vb. kendi değerlerinizle) oluşturulmalıdır. Gerçek `.env` dosyaları ve `node_modules/` bu depoya dahil edilmemiştir (bkz. `.gitignore`).
- Bu depo, eğitim amaçlı alıştırma ve proje çözümlerini içerir; production kullanımı hedeflenmemiştir.
