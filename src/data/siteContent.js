export const siteMeta = {
  brandName: "ClosedAI",
  shortBrand: "CAI",
  tagline: "Prémium die-cast miniatűrök autórajongóknak.",
  footerTagline: "Precízen kidolgozott autó miniatűrök komoly gyűjtőknek.",
  primaryHotcakesCartPath: "/HotcakesStore/Cart",
  primaryHotcakesCheckoutPath: "/KASSZA",
};

export const navigationItems = [
  { to: "/", label: "Főoldal" },
  { to: "/products", label: "Termékek" },
  { to: "/about", label: "Rólunk" },
];

export const homeContent = {
  hero: {
    eyebrow: "Prémium die-cast kollekció",
    headline: "Kurált modellautók, amelyek tisztelegnek az ikonikus autódesign előtt.",
    subheadline:
      "A pályalegendáktól a limitált szériás utcai autókig, fedezd fel a részletekre és hitelességre építő gyűjtőknek válogatott miniatűröket.",
    primaryCta: { label: "Kollekció megtekintése", to: "/products" },
    secondaryCta: { label: "Rólunk", to: "/about" },
    highlightStats: [
      { label: "Gyűjtői márkák", value: "6+" },
      { label: "Limitált kiadások", value: "120+" },
      { label: "Méretarány tartomány", value: "1:18 - 1:64" },
    ],
  },
  story: {
    heading: "Gyűjtőknek építve, nem impulzusvásárlóknak.",
    body: "Minden darabot ellenőrzünk a fényezés, a panelillesztés, a belső részletek és a kidolgozás alapján, mielőtt bekerülne a kínálatba.",
    featureTitle: "Minőségi ígéret",
    featureBody:
      "Ellenőrzött kiadásokat, megbízható gyártókat és átlátható állapotleírást preferálunk, hogy a gyűjteményed hosszú távon értékes maradjon.",
  },
};

export const aboutContent = {
  introTitle: "A ClosedAI-ról",
  introBody:
    "A ClosedAI prémium autó miniatűrökre specializált bolt. A termékcurációt, a márkatörténeteket és a gyűjtőközpontú szolgáltatást egyesítjük.",
  missionTitle: "Küldetésünk",
  missionBody:
    "Egy fókuszált, magas minőségű katalógust kínálunk, ahol minden modell az autós örökséget, a precíz gyártást és a hosszú távú gyűjtői értéket képviseli.",
  qualityBlocks: [
    {
      title: "Hitelességi fókusz",
      body: "Elsődlegesek az hivatalosan licencelt kiadások és az átlátható származás.",
    },
    {
      title: "Gyűjtői szintű válogatás",
      body: "Minden frissítést méretarányos pontosság és felületminőség szerint ellenőrzünk.",
    },
    {
      title: "Jövőbiztos kereskedelem",
      body: "Frontendünk úgy épül fel, hogy zökkenőmentesen illeszkedjen a közelgő Hotcakes kosárfolyamatokhoz.",
    },
  ],
  trustStats: [
    { label: "Képviselt márkák", value: "25+" },
    { label: "Kurált modellek", value: "1 800+" },
    { label: "Gyűjtői közösség", value: "14 ország" },
  ],
};
