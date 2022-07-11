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
    // onSuccess: data => {
    //   // queryClient.invalidateQueries('super-heroes');
    //   queryClient.setQueryData('super-heroes', oldQueryData => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: async newHero => {
      await queryClient.cancelQueries('super-heroes');
      const prevHeroData = queryClient.getQueryData('super-heroes');
      queryClient.setQueryData('super-heroes', oldQueryData => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            {
              id: oldQueryData?.data?.length + 1,
              ...newHero,
            },
          ],
        };
      });
      return {
        prevHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heroes', context.prevHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
