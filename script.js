// English text lives in index.html so the entire portfolio works without JavaScript.
// Add new translated text here and match its key with data-i18n in the HTML.
const uz = {
  stripNetworks: "TARMOQLAR", stripVirtual: "VIRTUALIZATSIYA", stripSecurity: "KIBERXAVFSIZLIK", virtualization: "Virtualizatsiya", webLabs: "Veb-xavfsizlik mashqlari",
  skip: "Asosiy mazmunga o'tish", navAbout: "Men haqimda", navSkills: "Ko'nikmalar", navWork: "Loyihalar", navBackground: "Ta'lim", navContact: "Aloqa",
  heroEyebrow: "KOMPYUTER FANLARI × KIBERXAVFSIZLIK", hello: "Salom, men", tagline: "Izlanishga qiziqish.<br>Xavfsizlikka e'tibor.",
  heroDescription: "Kyungpook Milliy universitetining Computer Science talabasiman. Tizimlar qanday ishlashi va ularni xavfsizroq qilish yo'llarini o'rganaman.",
  explore: "Loyihalarimni ko'rish", viewCV: "Rezyumeni ko'rish · PDF", heroNote: "Amaliyot orqali o'rganaman. Maqsad bilan yarataman.", based: "Toshkent, O'zbekiston / Janubiy Koreyada tahsil", scroll: "Batafsil tanishish",
  aboutLabel: "MEN HAQIMDA", aboutTitle: "Tizimlarni tushunish.<br>Qadamma-qadam.",
  aboutLead: "Virtual mashina yaratish, tarmoq sozlash yoki xavfsizlik masalasini yechish — amaliy ish orqali yaxshiroq o'rganaman.",
  aboutBody: "Janubiy Koreyaning Daegu shahridagi Kyungpook Milliy universitetida Computer Science bo'yicha bakalavr darajasida tahsil olyapman. O'qishni 2028-yilda tugatishim kutilmoqda. Darslardan tashqari Linux boshqaruvi, virtual infratuzilma va laboratoriyalarda xavfsizlik sinovlari bilan shug'ullanaman.",
  aboutGoal: "Maqsadim — Janubiy Koreya yoki O'zbekistonda boshlang'ich darajadagi penetration tester bo'lib ishlash. 2028-yildan ish boshlashni rejalashtirganman.", ctfFact: "Yechilgan CTF mashinalari", gradFact: "Kutilayotgan bitirish yili", langFact: "Tillar: o'zbek, koreys, ingliz",
  skillsLabel: "AMALIY VOSITALARIM", skillsTitle: "Amaliyotdagi ko'nikmalar.", skillsIntro: "Universitet ta'limi va laboratoriya mashqlari orqali rivojlanayotgan bilimlar.",
  systemsTitle: "Tizimlar va boshqaruv", systemsBody: "Linux terminali va Windows Server buyruqlar qatori bilan ishlash.", infraTitle: "Virtual infratuzilma", infraBody: "Turli operatsion tizimli uy laboratoriyasini yaratish va tarmoq asoslarini mashq qilish.", networking: "Tarmoq asoslari", securityTitle: "Xavfsizlik va ma'lumotlar", securityBody: "Laboratoriya tizimlari, xavfsizlik topshiriqlari va penetration testing asoslarini o'rganish.", pentesting: "Penetration testing asoslari",
  projectsLabel: "AMALIY O'RGANISH", projectsTitle: "Laboratoriyalar va tajribalar.", projectsIntro: "O'rganish jarayonimdagi amaliy ishlar. Bular shaxsiy laboratoriyalar, ish tajribasi emas.",
  labCategory: "VIRTUAL INFRATUZILMA", labTitle: "Ko'p tizimli uy laboratoriyasi", labBody: "Ubuntu LTS, Debian, Windows Server 2019 Server Core va CTF Linux mashinalarini o'rnatdim, tarmoqqa uladim va boshqardim. Terminalda ishlash, shell sozlamalari va server boshqaruvini mashq qildim.", labDetails: "Nimalarni mashq qildim?", labDetailBody: "VirtualBox va UTM orqali virtual mashinalar yaratish, virtual tarmoqlarni sozlash, Linux terminalida ishlash va Windows Server'ni buyruqlar qatoridan boshqarish.",
  ctfCategory: "XAVFSIZLIK LABORATORIYALARI", ctfTitle: "Penetration testing va CTF", ctfBody: "8 ta CTF mashinasini yechdim. HTB Academy, TryHackMe, VulnHub va PortSwigger Web Security Academy laboratoriyalarida mashq qildim. Laboratoriya tizimlarini Nmap orqali skanerladim.", ctfDetails: "Amaliyot platformalari", projectNote: "Rasmlar laboratoriyalarning sxematik tasviridir. Ochiq loyiha repositorylari va yozma tahlillar tayyor bo'lganda havolalari qo'shiladi.", githubVisit: "GitHub profilimni ko'rish",
  backgroundLabel: "HOZIRGACHA BOSIB O'TGAN YO'LIM", backgroundTitle: "Kelajak uchun bilim poydevori.", educationLabel: "Ta'lim", educationDate: "SENTABR 2023 — HOZIR", degree: "Computer Science bakalavriati · O'qish davom etmoqda", educationBody: "Daegu, Janubiy Koreya. Kutilayotgan bitirish yili: 2028. Universitet ta'limi bilan birga Linux boshqaruvi, virtual infratuzilma va kiberxavfsizlikni mustaqil o'rganaman.", languagesTitle: "Tillar", languagesBody: "O'zbek · Koreys · Ingliz", certificatesLabel: "Sertifikatlar",
  resumeLabel: "BATAFSIL MA'LUMOT", resumeTitle: "Men haqimda — bir hujjatda.", resumeBody: "Ta'lim, ko'nikmalar, sertifikatlar va amaliy ishlar.", downloadCV: "PDF yuklab olish", contactLabel: "BOG'LANAMIZ", contactTitle: "Mazmunli suhbatlar.<br>Yangi imkoniyatlar.", contactBody: "Kiberxavfsizlik, birgalikda o'rganish yoki kelajakdagi imkoniyatlar haqida suhbatlashmoqchimisiz? Mamnuniyat bilan bog'lanaman.", footer: "Qiziqish bilan yaratildi. GitHub Pages uchun.", backTop: "Yuqoriga qaytish"
};

const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
const en = Object.fromEntries(translatedNodes.map(node => [node.dataset.i18n, node.innerHTML]));
const menu = document.querySelector('#navigation');
const menuToggle = document.querySelector('.menu-toggle');
let language = 'en';

function setLanguage(next) {
  language = next === 'uz' ? 'uz' : 'en';
  const dictionary = language === 'uz' ? uz : en;
  translatedNodes.forEach(node => { node.innerHTML = dictionary[node.dataset.i18n] ?? en[node.dataset.i18n]; });
  document.documentElement.lang = language;
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.querySelector('.language').setAttribute('aria-label', language === 'uz' ? 'Til' : 'Language');
  menu.setAttribute('aria-label', language === 'uz' ? 'Asosiy navigatsiya' : 'Main navigation');
  document.title = language === 'uz' ? 'Diyorbek Abduvaitov | Computer Science va kiberxavfsizlik' : 'Diyorbek Abduvaitov | Computer Science & Cybersecurity';
  document.querySelector('meta[name="description"]').content = language === 'uz' ? "Diyorbek Abduvaitov — Kyungpook Milliy universiteti Computer Science talabasi. Linux, virtual infratuzilma va kiberxavfsizlik bo'yicha amaliy ishlar." : 'Diyorbek Abduvaitov — Computer Science student at Kyungpook National University. Explore Linux, virtual infrastructure and cybersecurity lab practice.';
  document.querySelector('.lab-art').setAttribute('aria-label', language === 'uz' ? "O'zaro ulangan virtual mashinalar sxemasi" : 'Illustration of connected virtual machines');
  document.querySelector('.ctf-art').setAttribute('aria-label', language === 'uz' ? 'Yechilgan sakkizta CTF mashinasining sxematik tasviri' : 'Illustration representing eight solved CTF machines');
  updateMenuLabel();
  try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable in private browsing. */ }
}
function updateMenuLabel() {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-label', language === 'uz' ? (open ? 'Menyuni yopish' : 'Menyuni ochish') : (open ? 'Close menu' : 'Open menu'));
}
function closeMenu() {
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuToggle.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
try { language = localStorage.getItem('portfolio-language') === 'uz' ? 'uz' : 'en'; } catch { /* Default to English. */ }
setLanguage(language);
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menu.querySelectorAll('a').forEach(link => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id], main > .section[id]').forEach(section => observer.observe(section));
}
