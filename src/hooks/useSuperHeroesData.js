import { useQuery } from 'react-query';
import { RQfetchHeroes } from '../networks/api';

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
