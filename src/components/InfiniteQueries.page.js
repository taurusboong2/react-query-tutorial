import React, { Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchInfiniteColors } from '../networks/api';

export const InfiniteQueriesPpage = () => {
  const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(['colors'], fetchInfiniteColors, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 3) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;
  return (
    <>
      <h1>InfiniteQueriesPpage</h1>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map(color => (
                <h2 key={color.id}>
                  {color.id}. {color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
};
