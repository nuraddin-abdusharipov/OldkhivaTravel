// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loadingScreen);
    
    setTimeout(() => {
      loadingScreen.remove();
    }, 2500);
  }, 100);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const scrollTop = document.querySelector('.scroll-top');
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    scrollTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTop.classList.remove('visible');
  }
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });
}

// ===== CLOSE MENU ON CLICK OUTSIDE =====
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
document.body.appendChild(scrollTopBtn);

// ===== LANGUAGE TRANSLATIONS =====
const translations = {
  uz: {
    // Navigation
    navHome: "Bosh sahifa",
    navServices: "Xizmatlar",
    navBooking: "Bron qilish",
    navContact: "Aloqa",
    
    // Hero Section
    title: "Old Khiva <span style='color: #ff6b35;'>Travel</span>",
    subtitle: "Tez va ishonchli taksi xizmati<br>Safaringizni soniyalarda bron qiling",
    book: "Bron qilish",
    pickup: "Olib ketish manzili",
    dropoff: "Tushirish manzili",
    
    // Services Section
    servicesTitle: "Bizning Taksi Xizmatlarimiz",
    servicesSubtitle: "Xiva va uning atrofidagi mashhur yo'nalishlardan tanlang",
    
    // Service Cards
    s1: "Xiva vokzali → Ichan Qal'a / Mehmonxona",
    p1: "5–10$ dan boshlab",
    s2: "Urganch aeroporti → Xiva",
    p2: "20–25$ dan boshlab", 
    s3: "Urganch vokzali → Xiva",
    p3: "15–20$ dan boshlab",
    s4: "Xiva → KPP Shavat",
    p4: "10–15$ dan boshlab",
    s5: "Xiva → Nukus",
    p5: "80–100$ dan boshlab",
    s6: "Xiva → Muynak → Nukus",
    p6: "150–200$ dan boshlab",
    s7: "Ekskursiya: Ayaz Qal'a, Tupraq Qal'a",
    p7: "70–100$ dan boshlab",
    s8: "Xiva → Buxoro",
    p8: "120–150$ dan boshlab",
    
    // Cars Section
    carsTitle: "Bizning Avtomobillarimiz",
    carsSubtitle: "Sayohatingiz uchun qulay va ishonchli avtomobillar",
    
    // Contact Section
    contactTitle: "Biz bilan bog'lanish",
    contactText: "Old Khiva Travel bilan aloqa qiling",
    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    message: "Xabaringiz",
    send: "Xabarni yuborish",
    
    // Footer
    quickLinks: "Tezkor havolalar",
    contactInfo: "Aloqa ma'lumotlari",
    workingHours: "Ish vaqtlari",
    available247: "24/7 Mavjud",
    allRights: "Barcha huquqlar himoyalangan",
    
    // Form buttons
    bookNow: "Hozir bron qiling",
    sendMessage: "Xabarni yuborish",
    confirmBooking: "Bronni tasdiqlash",
    
    // Booking page
    taxiBooking: "Taksi bron qilish",
    bookYourRide: "Avtomobilingizni bron qiling",
    selectedRoute: "Tanlangan yo'nalish",
    estimatedPrice: "Taxminiy narx",
    fullName: "To'liq ism",
    phoneNumber: "Telefon raqami",
    emailOptional: "Email (ixtiyoriy)",
    numPassengers: "Yo'lovchilar soni",
    pickupDate: "Olib ketish sanasi",
    pickupTime: "Olib ketish vaqti",
    specialInstructions: "Maxsus ko'rsatmalar",
    
    // Contact page
    sendUsMessage: "Bizga xabar yuboring",
    getInTouch: "Bog'lanish",
    address: "Manzil",
    followUs: "Bizni kuzatib boring"
  },
  
  ru: {
    // Navigation
    navHome: "Главная",
    navServices: "Услуги",
    navBooking: "Бронирование",
    navContact: "Контакты",
    
    // Hero Section
    title: "Old Khiva <span style='color: #ff6b35;'>Travel</span>",
    subtitle: "Быстрый и надежный сервис такси<br>Забронируйте поездку за секунды",
    book: "Забронировать",
    pickup: "Место отправления",
    dropoff: "Место прибытия",
    
    // Services Section
    servicesTitle: "Наши услуги такси",
    servicesSubtitle: "Выберите из популярных маршрутов в Хиве и за ее пределами",
    
    // Service Cards
    s1: "Станция Хива → Ичан-Кала / Отель",
    p1: "от 5–10$",
    s2: "Аэропорт Ургенч → Хива",
    p2: "от 20–25$",
    s3: "Станция Ургенч → Хива",
    p3: "от 15–20$",
    s4: "Хива → КПП Шават",
    p4: "от 10–15$",
    s5: "Хива → Нукус",
    p5: "от 80–100$",
    s6: "Хива → Муйнак → Нукус",
    p6: "от 150–200$",
    s7: "Экскурсия: Аяз-Кала, Тупрак-Кала",
    p7: "от 70–100$",
    s8: "Хива → Бухара",
    p8: "от 120–150$",
    
    // Cars Section
    carsTitle: "Наши автомобили",
    carsSubtitle: "Комфортные и надежные автомобили для вашего путешествия",
    
    // Contact Section
    contactTitle: "Свяжитесь с нами",
    contactText: "Свяжитесь с Old Khiva Travel",
    name: "Ваше имя",
    phone: "Номер телефона",
    message: "Ваше сообщение",
    send: "Отправить сообщение",
    
    // Footer
    quickLinks: "Быстрые ссылки",
    contactInfo: "Контактная информация",
    workingHours: "Время работы",
    available247: "24/7 Доступно",
    allRights: "Все права защищены",
    
    // Form buttons
    bookNow: "Забронировать сейчас",
    sendMessage: "Отправить сообщение",
    confirmBooking: "Подтвердить бронирование",
    
    // Booking page
    taxiBooking: "Бронирование такси",
    bookYourRide: "Забронируйте вашу поездку",
    selectedRoute: "Выбранный маршрут",
    estimatedPrice: "Примерная стоимость",
    fullName: "Полное имя",
    phoneNumber: "Номер телефона",
    emailOptional: "Email (необязательно)",
    numPassengers: "Количество пассажиров",
    pickupDate: "Дата отправления",
    pickupTime: "Время отправления",
    specialInstructions: "Особые указания",
    
    // Contact page
    sendUsMessage: "Отправьте нам сообщение",
    getInTouch: "Связаться",
    address: "Адрес",
    followUs: "Подпишитесь на нас"
  },
  
  en: {
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navBooking: "Booking",
    navContact: "Contact",
    
    // Hero Section
    title: "Old Khiva <span style='color: #ff6b35;'>Travel</span>",
    subtitle: "Fast & Reliable Taxi Service<br>Book your ride in seconds",
    book: "Book Now",
    pickup: "Pick-up location",
    dropoff: "Drop-off location",
    
    // Services Section
    servicesTitle: "Our Taxi Services",
    servicesSubtitle: "Choose from our popular routes in Khiva and beyond",
    
    // Service Cards
    s1: "Khiva Station → Ichan Qal'a / Hotel",
    p1: "From 5–10$",
    s2: "Urgench Airport → Khiva",
    p2: "From 20–25$",
    s3: "Urgench Station → Khiva",
    p3: "From 15–20$",
    s4: "Khiva → KPP Shavat",
    p4: "From 10–15$",
    s5: "Khiva → Nukus",
    p5: "From 80–100$",
    s6: "Khiva → Muynak → Nukus",
    p6: "From 150–200$",
    s7: "Excursion: Ayaz Qal'a, Tupraq Qal'a",
    p7: "From 70–100$",
    s8: "Khiva → Bukhara",
    p8: "From 120–150$",
    
    // Cars Section
    carsTitle: "Our Cars",
    carsSubtitle: "Comfortable and reliable vehicles for your journey",
    
    // Contact Section
    contactTitle: "Contact Us",
    contactText: "Get in touch with Old Khiva Travel",
    name: "Your name",
    phone: "Phone number",
    message: "Your message",
    send: "Send Message",
    
    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    workingHours: "Working Hours",
    available247: "24/7 Available",
    allRights: "All rights reserved",
    
    // Form buttons
    bookNow: "Book Now",
    sendMessage: "Send Message",
    confirmBooking: "Confirm Booking",
    
    // Booking page
    taxiBooking: "Taxi Booking",
    bookYourRide: "Book Your Ride",
    selectedRoute: "Selected Route",
    estimatedPrice: "Estimated Price",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailOptional: "Email (Optional)",
    numPassengers: "Number of Passengers",
    pickupDate: "Pickup Date",
    pickupTime: "Pickup Time",
    specialInstructions: "Special Instructions",
    
    // Contact page
    sendUsMessage: "Send us a Message",
    getInTouch: "Get in Touch",
    address: "Address",
    followUs: "Follow Us"
  },
  
  tr: {
    // Navigation
    navHome: "Ana Sayfa",
    navServices: "Hizmetler",
    navBooking: "Rezervasyon",
    navContact: "İletişim",
    
    // Hero Section
    title: "Old Khiva <span style='color: #ff6b35;'>Travel</span>",
    subtitle: "Hızlı ve Güvenilir Taksi Hizmeti<br>Yolculuğunuzu saniyeler içinde rezerve edin",
    book: "Rezervasyon Yap",
    pickup: "Alış konumu",
    dropoff: "İniş konumu",
    
    // Services Section
    servicesTitle: "Taksi Hizmetlerimiz",
    servicesSubtitle: "Hive ve çevresindeki popüler rotalardan seçim yapın",
    
    // Service Cards
    s1: "Hive İstasyonu → İçan Kale / Otel",
    p1: "5–10$'dan itibaren",
    s2: "Ürgenç Havalimanı → Hive",
    p2: "20–25$'dan itibaren",
    s3: "Ürgenç İstasyonu → Hive",
    p3: "15–20$'dan itibaren",
    s4: "Hive → KPP Shavat",
    p4: "10–15$'dan itibaren",
    s5: "Hive → Nukus",
    p5: "80–100$'dan itibaren",
    s6: "Hive → Muynak → Nukus",
    p6: "150–200$'dan itibaren",
    s7: "Gezi: Ayaz Kalesi, Tuprak Kalesi",
    p7: "70–100$'dan itibaren",
    s8: "Hive → Buhara",
    p8: "120–150$'dan itibaren",
    
    // Cars Section
    carsTitle: "Arabalarımız",
    carsSubtitle: "Yolculuğunuz için konforlu ve güvenilir araçlar",
    
    // Contact Section
    contactTitle: "İletişim",
    contactText: "Old Khiva Travel ile iletişime geçin",
    name: "Adınız",
    phone: "Telefon numaranız",
    message: "Mesajınız",
    send: "Mesaj Gönder",
    
    // Footer
    quickLinks: "Hızlı Bağlantılar",
    contactInfo: "İletişim Bilgileri",
    workingHours: "Çalışma Saatleri",
    available247: "24/7 Müsait",
    allRights: "Tüm hakları saklıdır",
    
    // Form buttons
    bookNow: "Şimdi Rezervasyon Yap",
    sendMessage: "Mesaj Gönder",
    confirmBooking: "Rezervasyonu Onayla",
    
    // Booking page
    taxiBooking: "Taksi Rezervasyonu",
    bookYourRide: "Yolculuğunuzu Rezerve Edin",
    selectedRoute: "Seçilen Rota",
    estimatedPrice: "Tahmini Fiyat",
    fullName: "Tam Ad",
    phoneNumber: "Telefon Numarası",
    emailOptional: "E-posta (İsteğe bağlı)",
    numPassengers: "Yolcu Sayısı",
    pickupDate: "Alış Tarihi",
    pickupTime: "Alış Saati",
    specialInstructions: "Özel Talimatlar",
    
    // Contact page
    sendUsMessage: "Bize Mesaj Gönderin",
    getInTouch: "İletişime Geçin",
    address: "Adres",
    followUs: "Bizi Takip Edin"
  },
  
  de: {
    // Navigation
    navHome: "Startseite",
    navServices: "Dienstleistungen",
    navBooking: "Buchung",
    navContact: "Kontakt",
    
    // Hero Section
    title: "Old Khiva <span style='color: #ff6b35;'>Travel</span>",
    subtitle: "Schneller & zuverlässiger Taxiservice<br>Buchen Sie Ihre Fahrt in Sekunden",
    book: "Jetzt buchen",
    pickup: "Abholort",
    dropoff: "Zielort",
    
    // Services Section
    servicesTitle: "Unsere Taxidienste",
    servicesSubtitle: "Wählen Sie aus unseren beliebten Routen in Chiwa und Umgebung",
    
    // Service Cards
    s1: "Bahnhof Chiwa → Ichan Qal'a / Hotel",
    p1: "Ab 5–10$",
    s2: "Flughafen Urgentsch → Chiwa",
    p2: "Ab 20–25$",
    s3: "Bahnhof Urgentsch → Chiwa",
    p3: "Ab 15–20$",
    s4: "Chiwa → KPP Schawat",
    p4: "Ab 10–15$",
    s5: "Chiwa → Nukus",
    p5: "Ab 80–100$",
    s6: "Chiwa → Muynak → Nukus",
    p6: "Ab 150–200$",
    s7: "Exkursion: Ayaz Qal'a, Tupraq Qal'a",
    p7: "Ab 70–100$",
    s8: "Chiwa → Buchara",
    p8: "Ab 120–150$",
    
    // Cars Section
    carsTitle: "Unsere Autos",
    carsSubtitle: "Komfortable und zuverlässige Fahrzeuge für Ihre Reise",
    
    // Contact Section
    contactTitle: "Kontaktieren Sie uns",
    contactText: "Nehmen Sie Kontakt mit Old Khiva Travel auf",
    name: "Ihr Name",
    phone: "Telefonnummer",
    message: "Ihre Nachricht",
    send: "Nachricht senden",
    
    // Footer
    quickLinks: "Schnellzugriff",
    contactInfo: "Kontaktinformationen",
    workingHours: "Öffnungszeiten",
    available247: "24/7 Verfügbar",
    allRights: "Alle Rechte vorbehalten",
    
    // Form buttons
    bookNow: "Jetzt buchen",
    sendMessage: "Nachricht senden",
    confirmBooking: "Buchung bestätigen",
    
    // Booking page
    taxiBooking: "Taxibuchung",
    bookYourRide: "Buchen Sie Ihre Fahrt",
    selectedRoute: "Ausgewählte Route",
    estimatedPrice: "Geschätzter Preis",
    fullName: "Vollständiger Name",
    phoneNumber: "Telefonnummer",
    emailOptional: "E-Mail (Optional)",
    numPassengers: "Anzahl der Passagiere",
    pickupDate: "Abholdatum",
    pickupTime: "Abholzeit",
    specialInstructions: "Besondere Anweisungen",
    
    // Contact page
    sendUsMessage: "Senden Sie uns eine Nachricht",
    getInTouch: "Kontakt aufnehmen",
    address: "Adresse",
    followUs: "Folgen Sie uns"
  }
};

// ===== LANGUAGE FUNCTIONS =====
function setLanguage(lang) {
  const langData = translations[lang] || translations['en'];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'BUTTON') {
        if (element.getAttribute('type') !== 'submit') {
          element.value = langData[key];
        } else {
          element.textContent = langData[key];
        }
      } else {
        element.innerHTML = langData[key];
      }
    }
  });
  
  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (langData[key]) {
      element.setAttribute('placeholder', langData[key]);
    }
  });
  
  // Update title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (langData[key]) {
      element.setAttribute('title', langData[key]);
    }
  });
  
  // Update alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (langData[key]) {
      element.setAttribute('alt', langData[key]);
    }
  });
  
  // Update page title based on current page
  updatePageTitle(lang);
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Trigger language change animation
  document.body.classList.add('language-changing');
  setTimeout(() => {
    document.body.classList.remove('language-changing');
  }, 300);
}

function updatePageTitle(lang) {
  const path = window.location.pathname;
  const pageName = path.split('/').pop() || 'index.html';
  
  const pageTitles = {
    'index.html': {
      uz: 'Old Khiva | Travel - Bosh sahifa',
      ru: 'Old Khiva | Travel - Главная',
      en: 'Old Khiva | Travel - Home',
      tr: 'Old Khiva | Travel - Ana Sayfa',
      de: 'Old Khiva | Travel - Startseite'
    },
    'booking.html': {
      uz: 'Taksi bron qilish | Old Khiva Travel',
      ru: 'Бронирование такси | Old Khiva Travel',
      en: 'Taxi Booking | Old Khiva Travel',
      tr: 'Taksi Rezervasyonu | Old Khiva Travel',
      de: 'Taxibuchung | Old Khiva Travel'
    },
    'contact.html': {
      uz: 'Aloqa | Old Khiva Travel',
      ru: 'Контакты | Old Khiva Travel',
      en: 'Contact | Old Khiva Travel',
      tr: 'İletişim | Old Khiva Travel',
      de: 'Kontakt | Old Khiva Travel'
    }
  };
  
  const titles = pageTitles[pageName] || pageTitles['index.html'];
  document.title = titles[lang] || titles['en'];
}

// ===== INITIALIZE LANGUAGE =====
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('lang');
  const savedLang = localStorage.getItem('preferredLanguage') || 'uz';
  
  if (langSelect) {
    langSelect.value = savedLang;
    setLanguage(savedLang);
    
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
  
  // Also check for language selector in booking and contact pages
  const langSelectors = document.querySelectorAll('.lang-select');
  langSelectors.forEach(selector => {
    if (selector !== langSelect) {
      selector.value = savedLang;
      selector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }
  });
});

// ===== FORM HANDLING =====
class FormHandler {
  constructor(formId, type) {
    this.form = document.getElementById(formId);
    this.type = type;
    if (this.form) this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.addInputAnimations();
  }

  addInputAnimations() {
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    
    if (!this.validate(data)) return;
    
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    submitBtn.disabled = true;
    
    try {
      const currentLang = localStorage.getItem('preferredLanguage') || 'uz';
      const langText = {
          uz: {
    navHome: "Bosh sahifa",
    navServices: "Xizmatlar",
    navBooking: "Bron qilish",
    navContact: "Aloqa",

    title: "Old Khiva <span style='color: #ff6b35'>Travel</span>",
    subtitle: "Tez va ishonchli taksi xizmati<br>Safaringizni soniyalarda bron qiling",
    book: "Bron qilish",

    pickup: "Olib ketish manzili",
    dropoff: "Tushirish manzili",

    servicesTitle: "Bizning xizmatlar",
    servicesSubtitle: "Xiva va atrofidagi mashhur yo‘nalishlar",

    contactTitle: "Aloqa",
    contactText: "Old Khiva Travel bilan bog‘laning",

    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    message: "Xabaringiz",
    send: "Yuborish",

    allRights: "© 2026 Old Khiva Travel. Barcha huquqlar himoyalangan",

    invalidPhone: "Iltimos, to'g'ri telefon raqamini kiriting",
    requiredField: "Bu maydon to‘ldirilishi shart"
  },

  ru: {
    navHome: "Главная",
    navServices: "Услуги",
    navBooking: "Бронирование",
    navContact: "Контакты",

    title: "Old Khiva <span style='color: #ff6b35'>Travel</span>",
    subtitle: "Быстрое и надежное такси<br>Бронируйте за секунды",
    book: "Забронировать",

    pickup: "Место отправления",
    dropoff: "Место назначения",

    servicesTitle: "Наши услуги",
    servicesSubtitle: "Популярные маршруты в Хиве",

    contactTitle: "Контакты",
    contactText: "Свяжитесь с Old Khiva Travel",

    name: "Ваше имя",
    phone: "Номер телефона",
    message: "Ваше сообщение",
    send: "Отправить",

    allRights: "© 2026 Old Khiva Travel. Все права защищены",

    invalidPhone: "Пожалуйста, введите правильный номер телефона",
    requiredField: "Это поле обязательно для заполнения",

    // ===== Машины =====
    car1Name: "Chevrolet Cobalt",
    car1Desc: "Комфортный и надежный седан для города и дальних поездок. 4 пассажира, кондиционер и система безопасности включены.",

    car2Name: "BYD x1.2",
    car2Desc: "Современный электрический/гибридный автомобиль. Комфортный салон, передовые технологии для экологичного путешествия.",

    car3Name: "Chevrolet Lacetti x1.1",
    car3Desc: "Компактный седан, средний ценовой сегмент. Удобен для городских поездок, экономичный и надежный.",

    car4Name: "Hyundai H-1 x1.5",
    car4Desc: "Минивен для больших семей или групповых поездок. 7-9 пассажиров, просторный салон для комфортного путешествия.",

    car5Name: "Chery Tiggo 7 x1.4",
    car5Desc: "Современный SUV, стабильный и комфортный вождение. Идеально для семейных поездок с просторным салоном."
  },

  en: {
    navHome: "Home",
    navServices: "Services",
    navBooking: "Booking",
    navContact: "Contact",

    title: "Old Khiva <span style='color: #ff6b35'>Travel</span>",
    subtitle: "Fast & Reliable Taxi Service<br>Book your ride in seconds",
    book: "Book now",

    pickup: "Pick-up location",
    dropoff: "Drop-off location",

    servicesTitle: "Our Services",
    servicesSubtitle: "Popular routes in Khiva",

    contactTitle: "Contact",
    contactText: "Get in touch with Old Khiva Travel",

    name: "Your name",
    phone: "Phone number",
    message: "Your message",
    send: "Send",

    allRights: "© 2026 Old Khiva Travel. All rights reserved",

    invalidPhone: "Please enter a valid phone number",
    requiredField: "This field is required",

    // ===== Cars =====
    car1Name: "Chevrolet Cobalt",
    car1Desc: "Comfortable and reliable sedan for city and long-distance trips. 4 passengers, AC and safety system included.",

    car2Name: "BYD x1.2",
    car2Desc: "Modern electric/hybrid vehicle. Comfortable interior, advanced technology for eco-friendly travel.",

    car3Name: "Chevrolet Lacetti x1.1",
    car3Desc: "Compact sedan, mid-price segment. Comfortable for city trips, fuel-efficient and reliable.",

    car4Name: "Hyundai H-1 x1.5",
    car4Desc: "Minivan for big families or group trips. 7-9 passengers, spacious interior for comfortable travel.",

    car5Name: "Chery Tiggo 7 x1.4",
    car5Desc: "Modern SUV, stable and comfortable drive. Perfect for family trips with spacious interior."
  }
      };
const translations = {
  uz: {
    // ... oldingi matnlar
    carsTitle: "Bizning mashinalar",
    carsSubtitle: "Safaringiz uchun qulay va ishonchli transportlar",
    car1Name: "Chevrolet Cobalt",
    car1Desc: "Shahar va uzoq masofali yo‘llar uchun qulay va ishonchli sedan. 4 yo‘lovchi, konditsioner va xavfsizlik tizimi mavjud.",
    car2Name: "BYD",
    car2Desc: "Zamonaviy elektr/gibrid avtomobil. Qulay ichki makon, ekologik sayohat uchun ilg‘or texnologiya.",
    car3Name: "Chevrolet Lacetti",
    car3Desc: "Kompakt sedan, o‘rta narx segmenti. Shahar ichidagi sayohatlar uchun qulay, yonilg‘i tejamkor va ishonchli.",
    car4Name: "HYUNDAI H-1",
    car4Desc: "Katta oilalar yoki guruh sayohatlari uchun miniven. 7-9 yo‘lovchi, keng ichki makon.",
    car5Name: "Chery Tiggo 7 Pro",
    car5Desc: "Zamonaviy SUV, barqaror va qulay haydash. Oilaviy sayohatlar uchun ideal, keng ichki makon."
  },
  ru: {
    carsTitle: "Наши автомобили",
    carsSubtitle: "Комфортные и надежные автомобили для вашего путешествия",
    car1Name: "Chevrolet Cobalt",
    car1Desc: "Комфортный и надежный седан для города и дальних поездок. 4 пассажира, кондиционер и система безопасности включены.",
    car2Name: "BYD",
    car2Desc: "Современный электромобиль/гибрид. Комфортный салон, передовые технологии для экологичных поездок.",
    car3Name: "Chevrolet Lacetti",
    car3Desc: "Компактный седан, средний ценовой сегмент. Удобен для городских поездок, экономичен и надежен.",
    car4Name: "HYUNDAI H-1",
    car4Desc: "Минивэн для больших семей или групповых поездок. 7-9 пассажиров, просторный салон.",
    car5Name: "Chery Tiggo 7 Pro",
    car5Desc: "Современный SUV, стабильный и комфортный вождения. Идеально для семейных поездок, просторный салон."
  },
  en: {
    carsTitle: "Our Cars",
    carsSubtitle: "Comfortable and reliable vehicles for your journey",
    car1Name: "Chevrolet Cobalt",
    car1Desc: "Comfortable and reliable sedan for city and long-distance trips. 4 passengers, AC and safety system included.",
    car2Name: "BYD",
    car2Desc: "Modern electric/hybrid vehicle. Comfortable interior, advanced technology for eco-friendly travel.",
    car3Name: "Chevrolet Lacetti",
    car3Desc: "Compact sedan, mid-price segment. Comfortable for city trips, fuel-efficient and reliable.",
    car4Name: "HYUNDAI H-1",
    car4Desc: "Minivan for big families or group trips. 7-9 passengers, spacious interior for comfortable travel.",
    car5Name: "Chery Tiggo 7 Pro",
    car5Desc: "Modern SUV, stable and comfortable drive. Perfect for family trips with spacious interior."
  }
};

      
      const botToken = this.type === 'booking' 
        ? "8529581902:AAHBxCsvUYa8WT5y-i2AFCmeAmYNhwOha7w"
        : "YOUR_CONTACT_BOT_TOKEN";
      
      const chatId = this.type === 'booking' ? "7579886970" : "YOUR_CHAT_ID";
      
      let message = '';
      if (this.type === 'booking') {
        message = `
🚖 *${langText[currentLang].booking}*
━━━━━━━━━━━━━━━━
👤 *Ism:* ${data.name}
📞 *Telefon:* ${data.phone}
📍 *Yo'nalish:* ${data.route || 'Nomalum'}
💰 *Narx:* ${data.price || 'Nomalum'}
👥 *Yo'lovchilar:* ${data.passengers || '1'}
📅 *Sana:* ${data.date || 'Nomalum'}
⏰ *Vaqt:* ${data.time || 'Nomalum'}
📝 *Izoh:* ${data.notes || 'Yo\'q'}
━━━━━━━━━━━━━━━━
        `.trim();
      } else {
        message = `
📩 *${langText[currentLang].contact}*
━━━━━━━━━━━━━━━━
👤 *Ism:* ${data.name}
📞 *Telefon:* ${data.phone}
📧 *Email:* ${data.email || 'Ko\'rsatilmagan'}
💬 *Xabar:*
${data.message}
━━━━━━━━━━━━━━━━
        `.trim();
      }
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          chat_id: chatId, 
          text: message,
          parse_mode: 'Markdown'
        })
      });
      
      if (response.ok) {
        this.showToast(this.getSuccessMessage(currentLang), 'success');
        this.form.reset();
        this.form.classList.add('success');
        setTimeout(() => this.form.classList.remove('success'), 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      this.showToast(this.getErrorMessage(currentLang), 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  getSuccessMessage(lang) {
    const messages = {
      uz: 'Xabar muvaffaqiyatli yuborildi!',
      ru: 'Сообщение успешно отправлено!',
      en: 'Message sent successfully!',
    };
    return messages[lang] || messages['en'];
  }

  getErrorMessage(lang) {
    const messages = {
      uz: 'Xabar yuborishda xatolik. Iltimos, qayta urinib ko\'ring.',
      ru: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
      en: 'Failed to send message. Please try again.',

    };
    return messages[lang] || messages['en'];
  }

  validate(data) {
    const currentLang = localStorage.getItem('preferredLanguage') || 'uz';
    
    if (!data.name || data.name.trim().length < 2) {
      const messages = {
        uz: 'Iltimos, to\'liq ismingizni kiriting (kamida 2 belgi)',
        ru: 'Пожалуйста, введите полное имя (минимум 2 символа)',
        en: 'Please enter your full name (minimum 2 characters)',
      };
      this.showToast(messages[currentLang], 'error');
      return false;
    }
    
    if (!data.phone || !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(data.phone)) {
      const messages = {
        uz: 'Iltimos, to\'g\'ri telefon raqamini kiriting',
        ru: 'Пожалуйста, введите правильный номер телефона',
        en: 'Please enter a valid phone number',
      };
      this.showToast(messages[currentLang], 'error');
      return false;
    }
    
    return true;
  }

  showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Initialize form handlers on all pages
new FormHandler('bookingForm', 'booking');
new FormHandler('contactForm', 'contact');
new FormHandler('quickBookingForm', 'booking');

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card, .car-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// ===== RIPPLE EFFECT =====
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', function(e) {
      if (this.tagName === 'A' && this.getAttribute('href')?.startsWith('http')) return;
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

// ===== FLOATING ELEMENTS =====
function createFloatingElements() {
  const container = document.querySelector('.hero-section');
  if (!container) return;
  
  for (let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.style.width = `${Math.random() * 80 + 20}px`;
    element.style.height = element.style.width;
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    element.style.opacity = `${Math.random() * 0.3 + 0.1}`;
    element.style.animationDuration = `${Math.random() * 30 + 20}s`;
    container.appendChild(element);
  }
}

createFloatingElements();

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    el.style.transform = `translate3d(0, ${yPos}px, 0)`;
  });
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// ===== INITIALIZE COUNTERS =====
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target')) || 0;
    if (target > 0) {
      animateCounter(counter, target);
    }
  });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + S to scroll to services
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Ctrl/Cmd + C to scroll to contact
  if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Escape to close modals
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  }
});

// ===== TOGGLE ACTIVE NAV LINK =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});