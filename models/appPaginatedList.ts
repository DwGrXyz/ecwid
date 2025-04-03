export type AppPaginatedList<T> = {
  count: number;
  items: T[];
  limit: number;
  offset: number;
  total: number;
};
