import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchColors } from '../networks/api';

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['colors', pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  const setPageNext = () => {
    setPageNumber(prev => prev + 1);
  };

  const setPagePrev = () => {
    setPageNumber(prev => prev - 1);
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;
  return (
    <>
      <h1>PaginatedQueriesPage</h1>
      {data?.data.map(color => {
        return (
          <div key={color.id}>
            <h2>
              {color.id}. {color.label}
            </h2>
          </div>
        );
      })}
      <div>
        <button onClick={setPagePrev} disabled={pageNumber === 1}>
          prev
        </button>
        <button onClick={setPageNext} disabled={pageNumber === 3}>
          next
        </button>
      </div>
      {isFetching && 'Loading'}
    </>
  );
};
