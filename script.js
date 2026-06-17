// ========== PRODUCT DATA ==========
const products = {
  bag: [
    {
      id: 1,
      name: "ColorFull Bag",
      price: "Cost: 1200 Afg",
      image: "images/bag1.jpg",
    },
    {
      id: 2,
      name: "Embroidered Clutch",
      price: "Cost: 800 Afg",
      image: "images/bag22.webp",
    },
    {
      id: 3,
      name: "Leather Shoulder Bag",
      price: "Cost: 500 Afg",
      image: "images/bag4.jpg",
    },
    {
      id: 4,
      name: "Macrame Bag",
      price: "Cost: 700 Afg",
      image: "images/bag33.jpg",
    },
    {
      id: 5,
      name: "Market Basket Bag",
      price: "Cost: 1500 Afg",
      image: "images/bag5.jpg",
    },
    {
      id: 6,
      name: "Tote bag",
      price: "Cost: 400 Afg",
      image: "images/bag2.jpg",
    },
  ],
  clothes: [
    {
      id: 1,
      name: "Embellished Hijab",
      price: "Cost: 3200 Afg",
      image: "images/c1.jpg",
    },
    {
      id: 2,
      name: "Bigiz Coat",
      price: "Cost: 2700 Afg",
      image: "images/c2.jpg",
    },
    {
      id: 3,
      name: "Bigiz Dress",
      price: "Cost: 1500 Afg",
      image: "images/c3.jpg",
    },
    {
      id: 4,
      name: "Hazara Traditional Dress",
      price: "Cost: 1800 Afg",
      image: "images/c4.jpg",
    },
    {
      id: 5,
      name: "Beaded vest",
      price: "Cost: 1200 Afg",
      image: "images/c5.jpg",
    },
    {
      id: 6,
      name: "Bigiz Hijab",
      price: "Cost: 2000 Afg",
      image: "images/c6.jpg",
    },
  ],
  decoration: [
    {
      id: 1,
      name: "Wall Art",
      price: "Cost: 1200 Afg",
      image: "images/d1.jpg",
    },
    {
      id: 2,
      name: "Ceramic Vase",
      price: "Cost: 1800 Afg",
      image: "images/d2.jpg",
    },
    {
      id: 3,
      name: "Decorative Mirror",
      price: "Cost: 1500 Afg",
      image: "images/d3.jpg",
    },
    {
      id: 4,
      name: "Cushion Cover",
      price: "Cost: 1000 Afg",
      image: "images/d4.jpg",
    },
    {
      id: 5,
      name: "Wooden Box",
      price: "Cost: 800 Afg",
      image: "images/d6.jpg",
    },
    {
      id: 6,
      name: "Lamp Shade",
      price: "Cost: 1200 Afg",
      image: "images/d5.jpg",
    },
  ],
  food: [
    {
      id: 1,
      name: "Ashak",
      price: "Cost: 250 Afg",
      image: "images/f1.jpg",
    },
    {
      id: 2,
      name: "Eshliki",
      price: "Cost: 300 Afg",
      image: "images/f2.jpg",
    },
    {
      id: 3,
      name: "COCO",
      price: "Cost: 100 Afg",
      image: "images/f3.jpg",
    },
    {
      id: 4,
      name: "Pizza",
      price: "Cost: 650 Afg",
      image: "images/f4.jpg",
    },
    {
      id: 5,
      name: "Chatni",
      price: "Cost: 250 Afg",
      image: "images/f5.jpg",
    },
    {
      id: 6,
      name: "Baghlawa",
      price: "Cost: 800 Afg",
      image: "images/f6.jpg",
    },
  ],
  carpet: [
    {
      id: 1,
      name: "Small Prayer Rug",
      price: "Cost: 2500 Afg",
      image: "images/car1.jpg",
    },
    {
      id: 2,
      name: "Geometric Carpet",
      price: "Cost: 5500 Afg",
      image: "images/car2.jfif",
    },
    {
      id: 3,
      name: "Runner Carpet",
      price: "Cost: 7800 Afg",
      image: "images/car3.jfif",
    },
    {
      id: 4,
      name: "Round Carpet",
      price: "Cost: 9000 Afg",
      image: "images/car4.jfif",
    },
    {
      id: 5,
      name: "wool rug carpet",
      price: "Cost: 8000 Afg",
      image: "images/car5.jfif",
    },
    {
      id: 6,
      name: "baluch rug Carpet",
      price: "Cost: 8500 Afg",
      image: "images/car6.jfif",
    },
  ],
};

// ========== LANGUAGE DATA ==========
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProducts: "Products",
    navContact: "Contact",
    heroTitle1: "Bazaarcha",
    heroSub1: "Afghan Girls' Handicrafts",
    heroTitle2: "Leather & Bags",
    heroSub2: "Handwoven, embroidered, traditional designs",
    heroTitle3: "Traditional Attire",
    heroSub3: "Unique pieces, hand-stitched with love",
    heroTitle4: "Heritage Carpets",
    heroSub4: "Traditional Afghan patterns",
    heroTitle5: "Decor & Foods",
    heroSub5: "Painted dishes, dried fruits, and more",
    aboutTitle: "About Bazaarcha",
    aboutP1:
      'Bazaarcha — meaning "little marketplace" in Dari — is a platform created to celebrate and empower young Afghan women artisans. In a country where opportunities for women are limited, Bazaarcha provides a digital space where their talent, creativity, and hard work can reach the world.',
    aboutP2:
      "Every product you see on Bazaarcha is handmade by an Afghan girl or young woman. From the intricate knots of a traditional carpet to the delicate embroidery on a Kuchi dress, from the hand-painted ceramic dishes to original canvas paintings — each piece carries a story of resilience, beauty, and heritage.",
    aboutP3:
      "When you purchase from Bazaarcha, you are not just buying a product. You are supporting a young woman's dream, helping her gain financial independence, and preserving Afghanistan's rich cultural traditions for future generations.",
    tag1: "🧵 Leather & Bags",
    tag2: "👗 Traditional Attire",
    tag3: "🪑 Home Decor",
    tag4: "🍽️ Dry Fruits & Spices",
    tag5: "🪢 Heritage Carpets",
    productsTitle: "Our Collections",
    productsSub: "Handmade by young Afghan women — each piece is unique",
    catBag: "Leather & Bags",
    catClothes: "Traditional Attire",
    catDecor: "Home Decor",
    catFood: "Food Processing",
    catCarpet: "Heritage Carpets",
    contactTitle: "Contact Us",
    contactSub: "Interested in a product? Tell us which one!",
    contactGet: "Get in Touch",
    contactFollow: "Follow Us",
    contactBtn: "Send Message",
    footer1: "Bazaarcha — Empowering Afghan Girls Through Heritage Crafts",
    footer2: "Every purchase supports a young artisan",
    initBtn: "📢 Initialize for Sale",
  },
  prs: {
    navHome: "خانه",
    navAbout: "درباره ما",
    navProducts: "محصولات",
    navContact: "تماس",
    heroTitle1: "بازارچه",
    heroSub1: "صنایع دستی دختران افغان",
    heroTitle2: "چرم و کیف",
    heroSub2: "دستبافت، گلدوزی شده، طرح‌های سنتی",
    heroTitle3: "لباس‌های سنتی",
    heroSub3: "قطعات منحصر به فرد، با عشق دوخته شده",
    heroTitle4: "قالین‌های میراثی",
    heroSub4: "نقوش سنتی افغان",
    heroTitle5: "دکور و غذاها",
    heroSub5: "ظروف نقاشی شده، میوه‌های خشک و بیشتر",
    aboutTitle: "درباره بازارچه",
    aboutP1:
      'بازارچه — به معنی "بازار کوچک" در دری — پلتفرمی است که برای تجلیل و توانمندسازی صنعتگران جوان افغان ایجاد شده است. در کشوری که فرصت‌ها برای زنان محدود است، بازارچه فضای دیجیتالی را فراهم می‌کند تا استعداد، خلاقیت و تلاش آنان به جهان برسد.',
    aboutP2:
      "هر محصولی که در بازارچه می‌بینید توسط یک دختر یا زن جوان افغان ساخته شده است. از گره‌های پیچیده یک قالین سنتی تا گلدوزی ظریف لباس کوچی، از ظروف سرامیکی نقاشی شده با دست تا نقاشی‌های اصلی روی بوم — هر قطعه داستانی از مقاومت، زیبایی و میراث را در خود دارد.",
    aboutP3:
      "وقتی از بازارچه خرید می‌کنید، فقط یک محصول نمی‌خرید. شما از رویای یک زن جوان حمایت می‌کنید، به او در کسب استقلال مالی کمک می‌کنید و سنت‌های غنی فرهنگی افغانستان را برای نسل‌های آینده حفظ می‌کنید.",
    tag1: "🧵 چرم و کیف",
    tag2: "👗 لباس‌های سنتی",
    tag3: "🪑 دکور خانه",
    tag4: "🍽️ میوه‌های خشک و ادویه‌جات",
    tag5: "🪢 قالین‌های میراثی",
    productsTitle: "مجموعه‌های ما",
    productsSub: "ساخته شده توسط دختران جوان افغان — هر قطعه منحصر به فرد است",
    catBag: "چرم و کیف",
    catClothes: "لباس‌های سنتی",
    catDecor: "دکور خانه",
    catFood: "فرآوری مواد غذایی",
    catCarpet: "قالین‌های میراثی",
    contactTitle: "تماس با ما",
    contactSub: "به یک محصول علاقه دارید؟ به ما بگویید کدام!",
    contactGet: "ارتباط با ما",
    contactFollow: "ما را دنبال کنید",
    contactBtn: "ارسال پیام",
    footer1: "بازارچه — توانمندسازی دختران افغان از طریق صنایع دستی میراثی",
    footer2: "هر خرید از یک صنعتگر جوان حمایت می‌کند",
    initBtn: "📢 آماده برای فروش",
  },
  ps: {
    navHome: "کور",
    navAbout: "زموږ په اړه",
    navProducts: "محصولات",
    navContact: "اړیکه",
    heroTitle1: "بازارچه",
    heroSub1: "د افغان نجونو لاسي صنایع",
    heroTitle2: "څرمن او کڅوړې",
    heroSub2: "لاسي اوبدل، ګلدوزي، دودیز ډیزاینونه",
    heroTitle3: "دودیز جامې",
    heroSub3: "ځانګړي ټوټې، په مینه سره ګنډل شوي",
    heroTitle4: "میراثي غالۍ",
    heroSub4: "دودیز افغان نمونې",
    heroTitle5: "سینګار او خواړه",
    heroSub5: "رنګ شوي لوښي، وچې مېوې او نور",
    aboutTitle: "د بازارچه په اړه",
    aboutP1:
      'بازارچه — چې معنی یې "کوچنی بازار" دی — یوه پلتفرم ده چې د افغان نجونو صنعتګرو د لمانځلو او پیاوړي کولو لپاره جوړه شوې ده. په یو هېواد کې چې د ښځو لپاره فرصتونه محدود دي، بازارچه یو ډیجیټل ځای برابروي چې د دوی استعداد، خلاقیت او سخت کار نړۍ ته ورسوي.',
    aboutP2:
      "هر محصول چې تاسو په بازارچه کې وینئ د یوې افغان نجلۍ یا ځوانې ښځې لخوا جوړ شوی دی. د دودیزې غالۍ له پیچلو ګرېډو څخه نیولې تر کوچي جامو پورې نازک ګلدوزي، د لاسي رنګ شوي سیرامیک لوښو څخه تر اصلي کینوس نقاشیو پورې — هر ټوټه د قوت، ښکلا او میراث کیسه لري.",
    aboutP3:
      "کله چې تاسو د بازارچه څخه پیرود کوئ، تاسو یوازې یو محصول نه اخلئ. تاسو د یوې ځوانې ښځې خوب ملاتړ کوئ، د هغې سره د مالي خپلواکۍ په ترلاسه کولو کې مرسته کوئ، او د افغانستان بډایه کلتوري دودونه د راتلونکو نسلونو لپاره ساتئ.",
    tag1: "🧵 څرمن او کڅوړې",
    tag2: "👗 دودیز جامې",
    tag3: "🪑 کور سینګار",
    tag4: "🍽️ وچې مېوې او مصالحې",
    tag5: "🪢 میراثي غالۍ",
    productsTitle: "زموږ ټولګه",
    productsSub: "د افغان نجونو لخوا لاسي جوړ شوي — هر ټوټه ځانګړی دی",
    catBag: "څرمن او کڅوړې",
    catClothes: "دودیز جامې",
    catDecor: "کور سینګار",
    catFood: "د خوړو پروسس",
    catCarpet: "میراثي غالۍ",
    contactTitle: "زموږ سره اړیکه",
    contactSub: "یو محصول ته لیوالتیا لرئ؟ موږ ته ووایاست کوم!",
    contactGet: "اړیکه ونیسئ",
    contactFollow: "موږ تعقیب کړئ",
    contactBtn: "پیغام واستوئ",
    footer1: "بازارچه — د میراثي صنایعو له لارې د افغان نجونو پیاوړي کول",
    footer2: "هر پیرود د یو ځوان صنعتګر ملاتړ کوي",
    initBtn: "📢 د پلور لپاره چمتو",
  },
};

let currentLang = "en";

function switchLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  renderProducts();

  document.querySelectorAll(".init-btn").forEach((btn) => {
    const productName = btn.dataset.name;
    btn.textContent = translations[lang].initBtn;
    btn.dataset.name = productName;
  });

  const placeholders = {
    contactName: { en: "Your Name", prs: "نام شما", ps: "ستا نوم" },
    contactEmail: { en: "Your Email", prs: "ایمیل شما", ps: "ستا بریښنالیک" },
    productName: {
      en: "Product name you are interested in",
      prs: "نام محصولی که به آن علاقه دارید",
      ps: "د محصول نوم چې تاسو یې علاقه لرئ",
    },
    contactMessage: {
      en: "Your Message (optional)",
      prs: "پیام شما (اختیاری)",
      ps: "ستا پیغام (اختیاري)",
    },
  };

  Object.keys(placeholders).forEach((id) => {
    const el = document.getElementById(id);
    if (el && placeholders[id][lang]) {
      el.placeholder = placeholders[id][lang];
    }
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    switchLanguage(lang);
  });
});

// ========== PRODUCT RENDER FUNCTION ==========
let currentCategory = "bag";
let currentPage = 0;
const itemsPerPage = 6;
let totalPages = 1;

function updateTotalPages() {
  totalPages = Math.ceil(products[currentCategory].length / itemsPerPage);
}

function renderProducts() {
  updateTotalPages();
  const categoryProducts = products[currentCategory];
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleProducts = categoryProducts.slice(start, end);

  const gallery = document.getElementById("productGallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  visibleProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
              <div class="product-img">
                  <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
              </div>
              <div class="product-info">
                  <div class="product-title">${product.name}</div>
                  <div class="product-price">${product.price}</div>
                  <button class="init-btn" data-id="${product.id}" data-name="${product.name}">${translations[currentLang].initBtn}</button>
              </div>
          `;
    gallery.appendChild(card);
  });

  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  if (prevArrow) prevArrow.style.opacity = currentPage === 0 ? "0.4" : "1";
  if (nextArrow)
    nextArrow.style.opacity = currentPage === totalPages - 1 ? "0.4" : "1";
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderProducts();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderProducts();
  }
}

function switchCategory(category) {
  currentCategory = category;
  currentPage = 0;
  renderProducts();

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    if (btn.getAttribute("data-category") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    switchCategory(category);
  });
});

document.getElementById("prevArrow")?.addEventListener("click", prevPage);
document.getElementById("nextArrow")?.addEventListener("click", nextPage);

// ========== TOAST FUNCTION ==========
const toast = document.getElementById("toastMsg");

function showToast(message) {
  toast.textContent = message;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 3000);
}

function initializeProduct(id, name) {
  showToast(`✅ "${name}" is now initialized for sale on Bazaarcha!`);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("init-btn")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    const name = e.target.getAttribute("data-name");
    initializeProduct(id, name);
  }
});

// ========== HERO SLIDESHOW ==========
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

if (slides.length > 0 && dotsContainer) {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextAutoSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }

  let autoSlideInterval = setInterval(nextAutoSlide, 2000);

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
    hero.addEventListener("mouseleave", () => {
      autoSlideInterval = setInterval(nextAutoSlide, 5000);
    });
  }
}

// ========== NAVIGATION LINKS ==========
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
