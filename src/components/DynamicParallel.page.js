import React from 'react';
import { useQueries } from 'react-query';
import { fetchHeroById } from '../networks/api';

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchHeroById(id),
      };
    })
  );

  console.log({ queryResults });

  return (
    <>
      <h1>DynamicParallelPage</h1>
    </>
  );
};
