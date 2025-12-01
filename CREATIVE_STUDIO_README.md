# BHI Creative Studio - Kullanım Kılavuzu

## 🎨 Yeni Özellikler

### 1. **Social Media Designer (Basic)** ✅
- 6 hazır template
- Image upload & text editing
- Square (1080x1080) & Story (1080x1920) formatlar
- PNG export

**Erişim:** Footer → "Sosial Media Dizayner (Basic)"

---

### 2. **Canvas Designer (PRO)** ✅
Canva benzeri profesyonel design tool.

#### Özellikler:
- ✅ **10+ Profesyonel Template**
  - Promosyon (4 adet)
  - Bilgilendirme (3 adet)
  - Testimonial (2 adet)
  - Before/After (1 adet)

- ✅ **Fabric.js Canvas Editor**
  - Drag & drop
  - Resize, rotate, move
  - Multi-layer support
  - Real-time preview

- ✅ **Layer Management**
  - Görünürlük toggle (göz ikonu)
  - Layer lock/unlock
  - Layer delete
  - Layer duplicate (kopyala)
  - Layer renaming

- ✅ **Advanced Text Editing**
  - Font selection (Playfair Display, Inter, Arial, Georgia)
  - Font size (12-120px)
  - Bold & Italic
  - Color picker
  - Text shadow
  - Alignment (left, center, right)

- ✅ **Shapes Library**
  - Rectangle (düzbucaqlı)
  - Circle (dairə)
  - Triangle (üçbucaq)

- ✅ **Image Tools**
  - Upload & auto-scale
  - Filters:
    - Grayscale (qara-ağ)
    - Sepia
    - Brightness
    - Vintage
    - Contrast

- ✅ **Brand Kit**
  - 6 BHI brand colors
  - Brand fonts (Playfair Display, Inter)
  - One-click color application

- ✅ **Project Management**
  - Save project (localStorage)
  - Load project
  - Undo (Ctrl+Z)
  - Redo (Ctrl+Y)
  - History tracking

- ✅ **Export**
  - High-quality PNG export
  - 1080x1080 (square)
  - 1080x1920 (story)
  - Scale-based rendering

**Erişim:** Footer → "Creative Studio (PRO)"

---

### 3. **Before/After Module** ✅
Medikal sonuçları göstermek için özel tasarlanmış modül.

#### Özellikler:
- ✅ **2 Görselleştirme Modu**
  - Slider karşılaştırma (interactive)
  - Side-by-side (yan yana)

- ✅ **Image Upload**
  - Əvvəl (Before) image
  - Sonra (After) image

- ✅ **Text Customization**
  - Başlık düzenleme
  - Alt başlık
  - Background color picker

- ✅ **Norwood Scale Integration** 🏥
  - 7 seviye Norwood scale
  - Before/After level comparison
  - Otomatik etiketleme
  - Açıklama metinleri:
    1. Saç tökülməsi yoxdur
    2. Minimal tökülmə
    3. Yüngül tökülmə
    4. Orta dərəcəli tökülmə
    5. Orta-ciddi tökülmə
    6. Ciddi tökülmə
    7. Çox ciddi tökülmə

- ✅ **Export**
  - High-quality PNG (1080x1080)
  - Brand footer automatic
  - Contact info included

**Erişim:** Footer → "Əvvəl & Sonra Modulu"

---

## 🚀 Kurulum & Çalıştırma

```bash
# Dependencies yükle
npm install

# Dev server başlat
npm run dev

# Production build
npm run build
```

## 📦 Yeni Paketler

```json
{
  "fabric": "^6.5.2",           // Canvas manipulation
  "html2canvas": "^1.4.1",      // Screenshot/export
  "@types/fabric": "^5.3.11"    // TypeScript support
}
```

## 🎯 Kullanım Senaryoları

### Scenario 1: Promo Post Oluştur
1. Footer → "Creative Studio (PRO)" tıkla
2. Sol sidebar → "Şablonlar" → "Premium Gold Promo" seç
3. "Şəkil Yüklə" ile görsel ekle
4. Text'leri çift tıklayıp düzenle
5. "Yüklə (PNG)" ile kaydet

### Scenario 2: Before/After Karşılaştırma
1. Footer → "Əvvəl & Sonra Modulu" tıkla
2. "Əvvəl" ve "Sonra" görsellerini yükle
3. Norwood Scale'i aç (toggle)
4. Before: 5, After: 1 seç
5. Slider ile karşılaştır
6. "PNG Olaraq Yüklə" ile kaydet

### Scenario 3: Özel Tasarım
1. Creative Studio aç
2. Template seç veya boş canvas
3. Shapes ekle (rectangle, circle, triangle)
4. Text ekle ve formatla
5. Brand Kit'ten renk seç
6. Layer panel'den sıralama yap
7. Save project ile kaydet
8. İstediğin zaman Load project

## 🔥 Pro İpuçları

### Canvas Designer:
- **Ctrl+Z**: Geri al
- **Ctrl+Y**: Yeniden et
- **Duplicate**: Layer'ı kopyalamak için "Kopyala" düğmesine tıkla
- **Center Alignment**: Object seçili iken alignment düğmelerine bas
- **Brand Colors**: Brand Kit'i aç, renge tıkla (seçili object'e uygulanır)

### Before/After:
- **Slider Mode**: Daha interactive, web'de kullanım için ideal
- **Side-by-Side**: Print veya statik gösterim için ideal
- **Norwood Scale**: Medikal accuracy için mutlaka kullan

## 📊 Export Kalitesi

- **Canvas Designer**: 1080x1080 veya 1080x1920 (scale-based)
- **Before/After**: 1080x1080 (fixed)
- **Social Designer**: 1080x1080 veya 1080x1920 (html2canvas)
- **Format**: PNG (maximum quality: 1.0)

## 🎨 Brand Kit Renkler

```css
Primary: #7F6A47  (Gold)
Dark: #3A3A3A     (Charcoal)
Light: #F8F3E6    (Cream)
White: #FFFFFF
Beige: #F0EBD9
Black: #1A1A1A
```

## 🆕 Template Kategorileri

### Promo (4 adet)
- Premium Gold Promo
- Dark Luxury
- Gradient Modern
- Special Offer

### Bilgilendirme (3 adet)
- Minimal Bilgilendirme
- Professional Info
- Medical Info

### Testimonial (2 adet)
- Müşteri Yorumu
- Success Story

### Before/After (1 adet)
- Əvvəl & Sonra Template

---

## 🐛 Bilinen Sorunlar

1. **Fabric.js TypeScript Error**: Görmezden gelin, runtime'da çalışıyor
2. **html2canvas tsconfig**: node_modules hatası, production'ı etkilemiyor

## 📞 Destek

Sorularınız için: malikilic66@gmail.com

---

**Geliştirici:** Malik İliç  
**Tarih:** 1 Aralık 2025  
**Versiyon:** 2.0 (Creative Studio Update)
