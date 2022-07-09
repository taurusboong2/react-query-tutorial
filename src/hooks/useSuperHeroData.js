import { useQuery, useQueryClient } from 'react-query';
import { fetchHeroById } from '../networks/api';

export const useSuperHeroData = heroId => {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], () => fetchHeroById(heroId), {
    initialData: () => {
      const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
