import React, { useState } from 'react';
import { useSuperHeroesData, useAddSuperHeroData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = data => {
    console.log('Perform side effect after data fetching');
  };

  const onError = error => {
    console.log('Perform side effect after encounting error');
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onError, onSuccess);

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={alterEgo} onChange={e => setAlterEgo(e.target.value)} />
        <button onClick={handleAddHero}>Add hero</button>
      </div>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map(hero => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
