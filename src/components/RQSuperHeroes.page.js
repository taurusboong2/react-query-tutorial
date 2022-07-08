import React from 'react';
import { useQuery } from 'react-query';
import { RQfetchHeroes } from '../networks/api';

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', RQfetchHeroes, {
    cacheTime: 2000,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
