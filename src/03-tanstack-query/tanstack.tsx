import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './query-keys';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const fetchProducts = async ({ pageParam = 1 }): Promise<ProductResponse> => {
  const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${pageParam}`);
  if (!res.ok) throw new Error('Network error');
  return res.json();
};

export const useProductsInfinite = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.products,
    queryFn: fetchProducts,
    staleTime: 5000,
    gcTime: 10000,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
        const nextSkip = lastPage.skip + lastPage.limit;
        return nextSkip < lastPage.total ? nextSkip : undefined
    }
  });
};