export const siteMeta = {
  brandName: "Atelier Auto Models",
  shortBrand: "AAM",
  tagline: "Collector-grade die-cast miniatures for automotive enthusiasts.",
  footerTagline: "Precision-crafted auto miniatures curated for serious collectors.",
  primaryHotcakesCartPath: "/Store/ShoppingCart.aspx",
  primaryHotcakesCheckoutPath: "/Store/Checkout.aspx",
};

export const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
];

export const homeContent = {
  hero: {
    eyebrow: "Premium Die-Cast Collection",
    headline: "Curated model cars that honor iconic automotive design.",
    subheadline:
      "From track legends to limited-series road cars, discover premium-scale miniatures selected for collectors who value detail and authenticity.",
    primaryCta: { label: "View Collection", to: "/products" },
    secondaryCta: { label: "About Us", to: "/about" },
    highlightStats: [
      { label: "Collector brands", value: "6+" },
      { label: "Limited editions", value: "120+" },
      { label: "Scale range", value: "1:18 - 1:64" },
    ],
  },
  story: {
    heading: "Built for collectors, not impulse buyers.",
    body: "Each piece in our selection is reviewed for paint quality, panel alignment, interior fidelity, and finishing details before it appears in our catalog.",
    featureTitle: "Craftsmanship Promise",
    featureBody:
      "We prioritize verified releases, trusted makers, and condition transparency so your collection keeps long-term value.",
  },
};

export const aboutContent = {
  introTitle: "About Atelier Auto Models",
  introBody:
    "Atelier Auto Models is a specialist storefront for premium automotive miniatures. We combine product curation, brand storytelling, and collector-first service.",
  missionTitle: "Our Mission",
  missionBody:
    "Deliver a focused, high-quality catalog where every model represents automotive heritage, precise manufacturing, and long-term collectible value.",
  qualityBlocks: [
    {
      title: "Authenticity Focus",
      body: "We prioritize officially licensed releases and transparent product provenance.",
    },
    {
      title: "Collector-Level Curation",
      body: "Every catalog update is reviewed with scale accuracy and finish quality in mind.",
    },
    {
      title: "Future Commerce Ready",
      body: "Our frontend is structured to connect seamlessly with upcoming Hotcakes cart workflows.",
    },
  ],
  trustStats: [
    { label: "Brands represented", value: "25+" },
    { label: "Curated models", value: "1,800+" },
    { label: "Collector community", value: "14 countries" },
  ],
};
