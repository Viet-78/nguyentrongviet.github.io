# Nguyễn Trọng Việt — Portfolio

Website portfolio cá nhân (React + Vite + Tailwind), deploy tự động lên GitHub Pages.

## Chạy local

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Build production

```bash
npm run build
npm run preview
```

## Deploy

Push lên nhánh `portfolio/v1.0.0` → GitHub Actions tự build và deploy.

**Live site:** https://viet-78.github.io/nguyentrongviet.github.io/

### Cấu hình GitHub Pages (chỉ làm 1 lần)

1. Repo → **Settings** → **Pages**
2. **Source:** GitHub Actions (không phải Deploy from branch)

## Tùy chỉnh nội dung

| File | Nội dung |
|------|----------|
| `src/app/components/Hero.tsx` | Tên, mô tả, ảnh hero |
| `src/app/components/About.tsx` | Giới thiệu bản thân |
| `src/app/components/Portfolio.tsx` | Dự án |
| `src/app/components/Contact.tsx` | Email, WhatsApp, social links |
