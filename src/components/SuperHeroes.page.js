import React, { useState, useEffect } from 'react';
import { fetchHeroes } from '../networks/api';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchHeroes();
      setData(response.data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
