import { siteMeta } from "../data/siteContent";

const HOTCAKES_ADD_TO_CART_PATH = "/HotcakesStore/Cart";

let cartAdapter = {
  addToCart(product, quantity = 1) {
    if (!product?.sku) {
      console.error("Cannot add to Hotcakes cart: missing product SKU.", product);
      return;
    }

    const sku = encodeURIComponent(product.sku);
    const safeQuantity = Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
    window.location.href = `${HOTCAKES_ADD_TO_CART_PATH}?AddSku=${sku}&AddSkuQty=${safeQuantity}`;
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

export function addToCart(product, quantity) {
  cartAdapter.addToCart(product, quantity);
}

export function navigateToCart() {
  cartAdapter.navigateToCart();
}

export function navigateToCheckout() {
  cartAdapter.navigateToCheckout();
}
