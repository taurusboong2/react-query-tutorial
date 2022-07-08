import React, { useState, useEffect } from 'react';
import { fetchHeroes } from '../networks/api';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const { data, error } = await fetchHeroes();
      setData(data);
      setIsLoading(false);
      if (error) {
        setError(`${error.message}`);
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
