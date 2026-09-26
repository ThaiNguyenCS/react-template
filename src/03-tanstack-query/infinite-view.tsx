import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useProductsInfinite } from './tanstack';
import { useComponentLifecycle } from '../hooks/useComponentLifeCycle';

export const InfiniteView = () => {
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductsInfinite();
  const { ref, inView } = useInView();

  useComponentLifecycle("Infinite View")

  useEffect(() => {
    // Only fetch if sentinel is visible, more pages exist, and a fetch is not currently active
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === 'pending') return <p>Loading initial items...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  // Flatten the array of pages into a single flat list
  const allItems = data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <ul>
        {allItems.map((item) => (
          <li key={item.id} style={{ padding: '16px 0', borderBottom: '1px solid #ddd' }}>
            {item.title}
          </li>
        ))}
      </ul>

      {/* Sentinel trigger element */}
      <div ref={ref} style={{ height: '20px', margin: '20px 0', textAlign: 'center' }}>
        {isFetchingNextPage && <p>Loading more items...</p>}
        {!hasNextPage && <p>No more items to display.</p>}
      </div>
    </div>
  );
}; 