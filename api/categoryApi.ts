import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";

export const fetchAppCategory = (categoryId: number) =>
  useAppFetch<AppCategory>(`/categories/${categoryId}`);

export type FetchAppCategoriesProps = {
  parent?: number;
};
export const fetchAppCategories = (props?: FetchAppCategoriesProps) => {
  const params = { parent: props?.parent };
  return useAppFetch<AppPaginatedList<AppCategory>>("/categories", { params });
};
