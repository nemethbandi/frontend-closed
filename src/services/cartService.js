import { siteMeta } from "../data/siteContent";

const HOTCAKES_ADD_TO_CART_PATH = "/HotcakesStore/Cart";

let cartAdapter = {
  addToCart(product) {
    if (!product?.sku) {
      console.error("Cannot add to Hotcakes cart: missing product SKU.", product);
      return;
    }

    const sku = encodeURIComponent(product.sku);
    window.location.href = `${HOTCAKES_ADD_TO_CART_PATH}?AddSku=${sku}&AddSkuQty=1`;
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
