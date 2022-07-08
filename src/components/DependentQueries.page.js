import React from 'react';
import { useQuery } from 'react-query';
import { fetchStacksByUserName, fetchUserByEmail } from '../networks/api';

export const DependentQueriesPage = ({ id }) => {
  const { data: user } = useQuery(['user', id], () => fetchUserByEmail(id));
  const userName = user?.data.username;
  useQuery(['stacks', userName], () => fetchStacksByUserName(userName), {
    enabled: !!userName,
  });

  return (
    <>
      <h1>DependentQueriePpage</h1>
      <h3>{userName}</h3>
    </>
  );
};
