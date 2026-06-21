# Nguyễn Trọng Việt — Portfolio

Website portfolio cá nhân (HTML + CSS + JS thuần), deploy tự động lên GitHub Pages.

## Chạy local

Mở file `index.html` trực tiếp trong trình duyệt, hoặc dùng live server:

```bash
npx serve .
```

## Deploy

Push lên nhánh `portfolio/v1.0.0` → GitHub Actions tự deploy.

**Live site:** https://viet-78.github.io/nguyentrongviet.github.io/

### Cấu hình GitHub Pages (chỉ làm 1 lần)

1. Repo → **Settings** → **Pages**
2. **Source:** GitHub Actions (không phải Deploy from branch)

## Tùy chỉnh nội dung

| File | Nội dung |
|------|----------|
| `index.html` | Toàn bộ nội dung trang (hero, about, portfolio, skills, youtube, contact) |
| `css/styles.css` | Giao diện và animation |
| `js/animations.js` | GSAP animations (hero, scroll reveal, parallax) |
| `js/main.js` | Menu mobile, phát video portfolio |
