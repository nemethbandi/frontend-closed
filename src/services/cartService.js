import { siteMeta } from "../data/siteContent";

let cartAdapter = {
  addToCart(product) {
    console.info("Hotcakes adapter not connected yet. Product queued:", product);
  },
  navigateToCart() {
    window.location.href = siteMeta.primaryHotcakesCartPath;
  },
  navigateToCheckout() {
    window.location.href = siteMeta.primaryHotcakesCheckoutPath;
  },
};

export function setCartAdapter(adapter) {
  cartAdapter = { ...cartAdapter, ...adapter };
}

export function addToCart(product) {
  cartAdapter.addToCart(product);
}

export function navigateToCart() {
  cartAdapter.navigateToCart();
}

export function navigateToCheckout() {
  cartAdapter.navigateToCheckout();
}
