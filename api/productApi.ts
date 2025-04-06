import type { AppPaginatedList } from "@/models/appPaginatedList";
import type { AppProduct } from "@/models/appProduct";

export const fetchAppProduct = (productId: number) =>
  useAppFetch<AppProduct>(`/products/${productId}`);

export type FetchAppProductsProps = {
  productIds?: number[];
  category?: number;
};
export const fetchAppProducts = (props?: FetchAppProductsProps) => {
  const productId = props?.productIds ? props.productIds.join(",") : "";
  const params = { productId, category: props?.category };
  return useAppFetch<AppPaginatedList<AppProduct>>("/products", { params });
};
