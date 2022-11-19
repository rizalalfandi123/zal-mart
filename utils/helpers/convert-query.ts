import qs from "qs";

type QueryPagination = { take?: number; skip?: number };
type QuerySort<T> = { [Key in keyof T]?: "asc" | "desc" }[];

export const convertQuery = <T = any>(url?: string) => {
  if (!url) return {};

  const urlQuery = url.split("?")[1];
  if (!urlQuery) return {};

  // NOTE: convert filter
  const filter = qs.parse(urlQuery, { allowDots: true });
  console.log({ filter });

  // NOTE: convert pagination
  const pagination: QueryPagination = { take: undefined, skip: undefined };

  if (filter.take && !isNaN(Number(filter.take))) {
    pagination.take = Number(filter.take);
    delete filter.take;
  }

  if (filter.skip && !isNaN(Number(filter.skip))) {
    pagination.skip = Number(filter.skip);
    delete filter.skip;
  }

  // NOTE: convert sort
  const sort: QuerySort<T> = [];

  if (filter.sort) {
    sort.push(filter.sort as QuerySort<T>[0]);
    delete filter.sort;
  }

  return {
    filter,
    pagination,
    sort,
  };
};
