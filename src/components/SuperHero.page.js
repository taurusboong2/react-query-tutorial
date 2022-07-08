import React from 'react';
import { useSuperHeroData } from '../hooks/useSuperHeroData';
import { useParams } from 'react-router-dom';

export const SuperHeroPage = () => {
  const { heroId } = useParams();

  const { isLoading, data, isError, error, isFetching } = useSuperHeroData(heroId);
  console.log(data);

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h1>Super hero details</h1>
      <div>
        <h3>
          {data.data.name} - <span>{data.data.alterEgo}</span>
        </h3>
      </div>
    </>
  );
};
