import React from 'react';
import { useQuery } from 'react-query';
import { RQfetchHeroes, RQfetchFriends } from '../networks/api';

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-hero', RQfetchHeroes);
  const { data: friends } = useQuery('friends', RQfetchFriends);

  return (
    <>
      <h1>Parallel Queries Page</h1>
    </>
  );
};
