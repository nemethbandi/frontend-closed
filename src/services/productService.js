import { brands } from "../data/brands";
import { products } from "../data/products";

export function getBrands() {
  return brands;
}

export function getProducts() {
  return products;
}

export function getFilteredProducts({ brand = "all" } = {}) {
  if (brand === "all") {
    return products;
  }
  return products.filter((product) => product.brand === brand);
}
