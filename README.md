# Diyorbek Abduvaitov — shaxsiy portfolio

Bepul GitHub Pages uchun HTML, CSS va JavaScript sayti. Inglizcha va o'zbekcha. Pullik API, kutubxona, obuna yoki tashqi shrift talab qilmaydi.

## Kompyuterda ko'rish

Ushbu papkani VS Code bilan oching. Terminalni shu papkada ochib bajaring:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Brauzerda http://127.0.0.1:8000 manzilini oching. Serverni to'xtatish: `Control + C`.
Bu faqat kompyuteringizdagi ko'rish; internetga nashr etmaydi.

## Fayllar nima qiladi?

- `index.html` — sayt tuzilishi va inglizcha matnlar.
- `styles.css` — ranglar, o'lchamlar, telefon ko'rinishi va animatsiyalar.
- `script.js` — o'zbekcha tarjimalar, tilni saqlash va mobil menyu.
- `assets/diyorbek-abduvaitov-resume.pdf` — foydalanuvchi bergan original rezyume.
- `assets/favicon.svg` — brauzer yorlig'idagi belgi.
- `robots.txt`, `sitemap.xml` — qidiruv tizimlari uchun ma'lumot.
- `.nojekyll` — GitHub Pages fayllarni oddiy statik sayt sifatida xizmat qilishi uchun.
- `.gitignore` — vaqtinchalik va maxfiy fayllarni Git tarixiga qo'shmaslik qoidalari.

## Matnni o'zgartirish

Inglizcha matnni `index.html` ichida o'zgartiring. Uning `data-i18n` kalitiga mos o'zbekcha matnni `script.js` ichidagi `uz` lug'atidan toping. `<br>` yangi qator qo'yadi. Tarjimalar faqat mahalliy ishonchli koddan olinadi; foydalanuvchi kiritmalarini `innerHTML` orqali qo'shmang.

## Yangi loyiha qo'shish

`index.html` faylidagi `projects-grid` ichida bitta `project-card` blokidan nusxa oling. Haqiqiy nom va tavsif bilan almashtiring, yangi `data-i18n` kalitlari yarating va `script.js` ga tarjimalar qo'shing. Kod mavjud bo'lsa, o'sha loyihaning aniq repository havolasini kiriting. Bosh sahifadagi statistikani faqat tasdiqlangan natijalar bilan yangilang.

## Ma'lumot manbasi va to'ldiriladigan joylar

Mazmun foydalanuvchi taqdim etgan rezyumega asoslangan. Ish tajribasi, til darajalari, Python, JavaScript yoki AI bo'yicha malaka o'ylab topilmagan. Sayt JavaScript bilan yozilgani egasining rezyumedagi ko'nikmasi sifatida ko'rsatilmaydi.

- Telegram: https://t.me/diyor_7077 (foydalanuvchi bergan username).
- Laboratoriyalar uchun repository yoki write-up havolalari berilmagan. Rasmlar CSS bilan yaratilgan sxemalar, haqiqiy skrinshotlar emas.
- Sertifikat nomlari rezyumedan olindi, tasdiqlash havolalari berilmagan.
- PDF original holida nusxalangan: unda telefon raqami va email mavjud. Internetga chiqarishdan oldin foydalanuvchi PDF mazmunini tekshirishi kerak.
- Aloqa bo'limidagi “Gmail” havolasi pochta dasturini ochadi; manzil HTMLdagi `mailto:` havolasida va PDF rezyumeda mavjud.
- Headerda Diyorbek Abduvaitov ismi ko‘rsatiladi.

## GitHub Pages

Sayt manzili: https://diyorbekabduvaitov.github.io/
Repository: https://github.com/diyorbekabduvaitov/diyorbekabduvaitov.github.io

GitHub Pages manbasi: `main` branch, `/(root)` papkasi. Shu branchga yuborilgan o'zgarishlar GitHub Pages tomonidan nashr qilinadi.

## SEO va qulaylik

Tavsif, canonical havola, Open Graph, sitemap va robots.txt mavjud. Til almashtirish bitta URLda ishlaydi; o'zbekcha sahifa uchun alohida SEO URL yaratilmagan. Google indekslash yoki qidiruvdagi o'rin kafolatlanmaydi. Search Console hali ulanmagan.

Klaviatura fokusi, asosiy mazmunga o'tish havolasi, semantik bo'limlar, mobil menyu holati va kamaytirilgan animatsiya sozlamasi hisobga olingan. Inglizcha asosiy mazmun JavaScript o'chirilganda ham ko'rinadi. Shriftlar qurilmadan olinadi; tashqi kuzatuv yoki analitika qo'shilmagan.
