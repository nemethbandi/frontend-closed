import { brands } from "../data/brands";
import { products } from "../data/products";

const HOTCAKES_API_KEY = "1-765e8551-eb7f-4bc2-bf9f-b28e56a1ebad";
const HOTCAKES_PRODUCTS_PATH = "/DesktopModules/Hotcakes/API/rest/v1/products";
const HOTCAKES_IMAGES_BASE_PATH = "/Portals/0/Hotcakes/Data/products";

function getHotcakesProductsUrl() {
  return `${HOTCAKES_PRODUCTS_PATH}?key=${HOTCAKES_API_KEY}`;
}

export function getBrands() {
  return brands;
}

function parseSitePrice(sitePrice, fallbackPrice) {
  const parsed = Number(sitePrice);
  return Number.isFinite(parsed) ? parsed : fallbackPrice;
}

function buildProductImageUrl(product) {
  const imageFile = product?.ImageFileMedium || product?.ImageFileSmall;
  if (!product?.Bvin || !imageFile) {
    return null;
  }
  const encodedBvin = encodeURIComponent(product.Bvin);
  const encodedImageFile = encodeURIComponent(imageFile);
  return `${HOTCAKES_IMAGES_BASE_PATH}/${encodedBvin}/${encodedImageFile}`;
}

function mapHotcakesProduct(hotcakesProduct, fallbackProduct) {
  if (!hotcakesProduct) {
    return fallbackProduct;
  }

  return {
    ...fallbackProduct,
    sku: hotcakesProduct.Sku || fallbackProduct.sku,
    name: hotcakesProduct.ProductName || fallbackProduct.name,
    price: parseSitePrice(hotcakesProduct.SitePrice, fallbackProduct.price),
    image: buildProductImageUrl(hotcakesProduct) || fallbackProduct.image,
  };
}

export async function getProducts() {
  try {
    const response = await fetch(getHotcakesProductsUrl(), {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`A Hotcakes terméklekérés sikertelen, státusz: ${response.status}`);
    }

    const data = await response.json();
    const hotcakesProducts = data?.Content?.Products;

    if (!Array.isArray(hotcakesProducts)) {
      throw new Error("A Hotcakes válasz nem tartalmazza a data.Content.Products tömböt.");
    }

    return products.map((fallbackProduct, index) =>
      mapHotcakesProduct(hotcakesProducts[index], fallbackProduct)
    );
  } catch (error) {
    console.error("Nem sikerült betölteni a termékeket a Hotcakes API-ból. Helyi adatokra váltunk.", error);
    return products;
  }
}

export function getFilteredProducts(productsList, { brand = "all" } = {}) {
  if (brand === "all") {
    return productsList;
  }
  return productsList.filter((product) => product.brand === brand);
}
