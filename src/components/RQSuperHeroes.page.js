import React from 'react';
import { useQuery } from 'react-query';
import { RQfetchHeroes } from '../networks/api';

export const RQSuperHeroesPage = () => {
  const onSuccess = data => {
    console.log('Perform side effect after data fetching');
  };

  const onError = error => {
    console.log('Perform side effect after encounting error');
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', RQfetchHeroes, {
    onSuccess,
    onError,
    select: data => {
      const superHeroesNames = data.data.map(hero => hero.name);
      return superHeroesNames;
    },
  });

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {/* {data?.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })} */}
      {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
