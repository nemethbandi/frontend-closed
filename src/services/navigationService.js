const DNN_PAGES = {
  products: "/TERM\u00C9KEK",
  about: "/R\u00D3LUNK",
};

export function buildProductsUrl(brandSlug) {
  const query = brandSlug ? `?brand=${encodeURIComponent(brandSlug)}` : "";
  return `${DNN_PAGES.products}${query}`;
}

export function buildAboutUrl() {
  return DNN_PAGES.about;
}
