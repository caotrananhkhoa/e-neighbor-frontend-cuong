import { useIntl } from '@umijs/max';
import { SelectProps } from 'antd/lib';
import { useEffect, useState } from 'react';

import { STORE_FILTER } from '@/const/store.filter';
import { usePriceFilter } from '@/hooks/usePriceFilter';

export enum PRODUCT_PAGE_SORTFIELDS {
  accessCount = 'accessCount',
  price = 'price',
  createdAt = 'createdAt',
}

export enum ORDER {
  asc = 'ASC',
  des = 'DESC',
}

export enum AVAILABILITY {
  available = 'product.status.available',
  notAvailable = 'product.status.not.available',
}

export const usePagination = (
  paginationMeta: IPaginationMeta = {
    page: 1,
    take: 12,
    itemCount: 0,
    pageCount: 1,
    hasPreviousPage: false,
    hasNextPage: false,
    offset: 0,
  },
  lessorId?: number,
) => {
  const { control, watch } = usePriceFilter();
  const { formatMessage } = useIntl();
  const [category, setCategory] = useState<string>('furnitures');
  const [locations, setLocations] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>();
  const [rating, setRating] = useState<number>();

  const searchBoxHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const currentSearchValue = event.currentTarget.value;
    console.log(event);
    setKeyword(currentSearchValue);
    return;
  };
  console.log(rating);

  const ratingHandler = (value: number) => {
    setRating(value);
  };

  const locationHandler = (location: string[]) => {
    setLocations(location);
  };

  const categoryHandler = (category: string) => setCategory(category);

  const [page, setPage] = useState<number>(paginationMeta.page);
  const [take, setTake] = useState<number>(paginationMeta.take);

  useEffect(() => {
    setPage(1);
  }, [keyword]);
  const takeHandler = (take: number) => setTake(take);
  const pageHandler = (page: number) => setTake(page);
  const [sortField, setSortField] = useState<PRODUCT_PAGE_SORTFIELDS>(
    PRODUCT_PAGE_SORTFIELDS.createdAt,
  );

  const sortOptions: SelectProps['options'] = (
    Object.keys(PRODUCT_PAGE_SORTFIELDS) as Array<keyof typeof PRODUCT_PAGE_SORTFIELDS>
  ).map((key) => ({
    label: formatMessage({ id: ['common.sort.options', key].join('.'), defaultMessage: key }),
    value: PRODUCT_PAGE_SORTFIELDS[key],
  }));

  const [order, setOrder] = useState<ORDER>(ORDER.des);
  const orderOptions: SelectProps['options'] = (
    Object.keys(ORDER) as Array<keyof typeof ORDER>
  ).map((key) => ({
    label: formatMessage({ id: ['common.order.options', key].join('.'), defaultMessage: key }),
    value: ORDER[key],
  }));

  const sortFieldHandler = (value: PRODUCT_PAGE_SORTFIELDS) => setSortField(value);
  const orderHandler = (value: ORDER) => setOrder(value);

  const [offset, setOffset] = useState(paginationMeta.offset);
  const [status, setStatus] = useState<AVAILABILITY>(AVAILABILITY.available);

  const offsetHandler = (offset: number) => setOffset(offset);
  const statusHandler = (availablity: AVAILABILITY) => setStatus(availablity);

  const paginationParams: API.IProductPaginationParams = {
    isConfirmedByAdmin: false,
    isVehicle: category === 'vehicles' ?? false,
    name: keyword,
    offset,
    sortField,
    page,
    order,
    rating,
    take,
    lessorId,
    status,
    priceLowerBound: isNaN(Number(watch(STORE_FILTER.min)))
      ? undefined
      : Number(watch(STORE_FILTER.min)),
    priceUpperBound: isNaN(Number(watch(STORE_FILTER.max)))
      ? undefined
      : Number(watch(STORE_FILTER.max)),
    locations,
  };

  return {
    control,
    paginationParams,
    category,
    keyword,
    sortOptions,
    offset,
    sortField,
    page,
    order,
    orderOptions,
    rating,
    locations,
    take,
    lessorId,
    status,
    formatMessage,
    searchBoxHandler,
    ratingHandler,
    locationHandler,
    categoryHandler,
    takeHandler,
    pageHandler,
    orderHandler,
    sortFieldHandler,
    offsetHandler,
    statusHandler,
  } as const;
};
