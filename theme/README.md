# Secesta Tema Dosyaları

Bu klasör, Secesta web sitesinin tüm tema dosyalarını, renklerini, stillerini ve önemli konfigürasyonlarını içerir.

## 📁 Dosya Yapısı

### CSS Dosyaları

#### `colors.css`
Tüm renk tanımları ve CSS değişkenleri. Ana renk paleti, Elementor kit renkleri ve responsive renk tanımları.

**Kullanım:**
```html
<link rel="stylesheet" href="theme/colors.css">
```

#### `theme-styles.css`
Tema genelinde kullanılan stil kodları. Butonlar, formlar, navigasyon, tipografi ve diğer tema bileşenleri.

**Kullanım:**
```html
<link rel="stylesheet" href="theme/theme-styles.css">
```

#### `fonts.css`
Font tanımları, tipografi ayarları ve font yükleme stratejileri. Nunito ve Mona Sans font aileleri.

**Kullanım:**
```html
<link rel="stylesheet" href="theme/fonts.css">
```

#### `woocommerce-styles.css`
WooCommerce e-ticaret eklentisi için özel stil tanımları. Sepet, ürün, form ve mesaj stilleri.

**Kullanım:**
```html
<link rel="stylesheet" href="theme/woocommerce-styles.css">
```

#### `responsive-breakpoints.css`
Tüm responsive breakpoint tanımları ve media query'ler. Mobil, tablet, laptop ve desktop için özel stiller.

**Kullanım:**
```html
<link rel="stylesheet" href="theme/responsive-breakpoints.css">
```

### JavaScript Dosyaları

#### `analytics-tracking.js`
Google Analytics ve tracking kodları. Event tracking fonksiyonları ve GDPR uyumlu consent mode ayarları.

**Kullanım:**
```html
<script src="theme/analytics-tracking.js"></script>
```

**Özellikler:**
- Google Analytics entegrasyonu (G-N2EY8LN1V2)
- GDPR uyumlu consent mode
- Event tracking fonksiyonları
- LiteSpeed Cache referrer tracking

### HTML Şablonları

#### `seo-meta.html`
SEO meta tag'leri şablonu. Open Graph, Twitter Cards, Schema.org ve diğer SEO ayarları.

**Kullanım:**
HTML dosyalarının `<head>` bölümüne eklenebilir.

**İçerik:**
- Temel meta tag'ler
- Open Graph (Facebook) meta tag'leri
- Twitter Card meta tag'leri
- Schema.org JSON-LD yapılandırması
- Favicon ve ikon tanımları
- RSS feed linkleri

### Konfigürasyon Dosyaları

#### `config.json`
Site genelindeki tüm önemli ayarların JSON formatında toplandığı dosya.

**İçerik:**
- Site bilgileri
- Analytics ayarları
- Tema bilgileri
- Font tanımları
- Renk paleti
- WooCommerce ayarları
- Breakpoint tanımları
- Performance ayarları
- Plugin listesi
- SEO ayarları

**Kullanım:**
JavaScript veya backend uygulamaları tarafından okunabilir.

## 🎨 Renk Paleti

### Ana Renkler
- **Primary**: `#008AEE` (Mavi) - Ana marka rengi
- **Primary Hover**: `#008AEE` (Mavi) - Hover durumu
- **Accent**: `#000000` (Siyah) - Vurgu rengi

### Metin Renkleri
- **Text**: `#292929` (Koyu gri) - Ana metin
- **Text Light**: `#595959` (Orta gri) - İkincil metin

### Arka Plan Renkleri
- **Background**: `#FFFFFF` (Beyaz) - Ana arka plan
- **Background Light**: `#EDEDED` (Açık gri) - İkincil arka plan

### Kenarlık Renkleri
- **Border**: `#E2E2E2` (Açık gri) - Kenarlıklar

### WooCommerce Renkleri
- **WooCommerce Primary**: `#720eec` (Mor)
- **WooCommerce Green**: `#7ad03a` (Yeşil)
- **WooCommerce Red**: `#a00` (Kırmızı)
- **WooCommerce Orange**: `#ffba00` (Turuncu)

## 📐 Responsive Breakpoints

- **Mobile**: 0-767px
- **Mobile Extra**: 768-880px
- **Tablet**: 881-1024px
- **Tablet Extra**: 1025-1200px
- **Laptop**: 1201-1366px
- **Desktop**: 1367px+
- **Widescreen**: 2400px+

## 🔤 Font Aileleri

### Primary Font
- **Mona Sans** (Ana font)
- Fallback: Helvetica Neue, Helvetica, Arial, sans-serif

### Secondary Font
- **Nunito** (Google Fonts)
- Weights: 300, 400, 500, 600, 700

## 🛠️ CSS Değişkenleri

Tüm renkler CSS değişkenleri olarak tanımlanmıştır. Kullanım örneği:

```css
.my-element {
  color: var(--primary);
  background-color: var(--background);
  border: 1px solid var(--border);
}
```

## 🎯 Elementor Kit

Tema, Elementor Kit ID: `220521` kullanmaktadır. Tüm Elementor renk tanımları `colors.css` dosyasında `.elementor-kit-220521` sınıfı altında bulunur.

## 📊 Analytics ve Tracking

### Google Analytics
- Tracking ID: `G-N2EY8LN1V2`
- Consent Mode: Aktif (GDPR uyumlu)
- Google Site Kit: Entegre

### Event Tracking
- Buton tıklamaları
- Form gönderimleri
- Sayfa görüntülemeleri
- Dosya indirmeleri
- Dış link tıklamaları

## 🔍 SEO Özellikleri

- Open Graph meta tag'leri (Facebook)
- Twitter Card meta tag'leri
- Schema.org JSON-LD yapılandırması
- Canonical URL'ler
- Meta robots ayarları
- RSS feed linkleri

## ⚡ Performance

- LiteSpeed Cache entegrasyonu
- Lazy loading aktif
- Image optimization
- CSS/JS minification
- Font display optimization

## 📦 Eklentiler

- Elementor 3.33.0
- WooCommerce
- LiteSpeed Cache
- Google Site Kit 1.165.0
- Secesta SEO Bulucu

## 🔄 Güncelleme Notları

### Renkleri Değiştirmek
`colors.css` dosyasındaki `:root` ve `body` bölümlerindeki değişkenleri güncelleyin.

### Fontları Değiştirmek
`fonts.css` dosyasındaki font tanımlarını güncelleyin.

### Breakpoint'leri Değiştirmek
`responsive-breakpoints.css` ve `config.json` dosyalarını güncelleyin.

### Analytics ID'yi Değiştirmek
`analytics-tracking.js` ve `config.json` dosyalarını güncelleyin.

## 📝 Notlar

- Bu dosyalar statik HTML dosyaları için oluşturulmuştur
- WordPress teması için bu dosyalar `wp-content/themes/diteck/` klasörüne eklenebilir
- Tüm HTML dosyalarında inline CSS olarak bulunan tanımlar bu dosyalara taşınmıştır
- `config.json` dosyası tüm önemli ayarları merkezi olarak tutar

## 🚀 Hızlı Başlangıç

Tüm dosyaları HTML sayfalarına eklemek için:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <!-- SEO Meta Tags -->
  <!-- seo-meta.html içeriğini buraya ekleyin -->
  
  <!-- CSS Dosyaları -->
  <link rel="stylesheet" href="theme/fonts.css">
  <link rel="stylesheet" href="theme/colors.css">
  <link rel="stylesheet" href="theme/theme-styles.css">
  <link rel="stylesheet" href="theme/responsive-breakpoints.css">
  <link rel="stylesheet" href="theme/woocommerce-styles.css">
  
  <!-- JavaScript -->
  <script src="theme/analytics-tracking.js"></script>
</head>
<body>
  <!-- İçerik -->
</body>
</html>
```
