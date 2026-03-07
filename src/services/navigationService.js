export function buildProductsUrl(brandSlug) {
  return brandSlug ? `/products?brand=${encodeURIComponent(brandSlug)}` : "/products";
}
