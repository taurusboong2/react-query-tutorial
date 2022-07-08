import React from 'react';
import { useQuery } from 'react-query';
import { RQfetchHeroes } from '../networks/api';

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', RQfetchHeroes, {
    enabled: false,
  });

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
