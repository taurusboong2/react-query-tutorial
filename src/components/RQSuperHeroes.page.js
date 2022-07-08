import React from 'react';
import { useQuery } from 'react-query';
import { fetchHeroes } from '../networks/api';

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heroes', fetchHeroes);

  if (isLoading) <h2>Loading...</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
