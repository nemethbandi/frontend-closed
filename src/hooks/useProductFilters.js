import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products as fallbackProducts } from "../data/products";
import { getFilteredProducts, getProducts } from "../services/productService";

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeBrand = searchParams.get("brand") || "all";
  const [allProducts, setAllProducts] = useState(fallbackProducts);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      const loadedProducts = await getProducts();
      if (isMounted) {
        setAllProducts(loadedProducts);
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(
    () => getFilteredProducts(allProducts, { brand: activeBrand }),
    [activeBrand, allProducts]
  );

  function setBrandFilter(brand) {
    if (brand === "all") {
      setSearchParams({});
      return;
    }
    setSearchParams({ brand });
  }

  return {
    activeBrand,
    filteredProducts,
    setBrandFilter,
  };
}
