import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getFilteredProducts } from "../services/productService";

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeBrand = searchParams.get("brand") || "all";

  const filteredProducts = useMemo(
    () => getFilteredProducts({ brand: activeBrand }),
    [activeBrand]
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
