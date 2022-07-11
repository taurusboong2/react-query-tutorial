import { useQuery, useMutation, useQueryClient } from 'react-query';
import { RQfetchHeroes, createNewHero } from '../networks/api';

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', RQfetchHeroes, {
    onSuccess,
    onError,
    // select: data => {
    //   const superHeroesAlterEgo = data.data.map(hero => hero.alterEgo);
    //   return superHeroesAlterEgo;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
