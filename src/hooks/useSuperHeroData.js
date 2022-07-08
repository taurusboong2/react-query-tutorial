import { useQuery } from 'react-query';
import { fetchHeroById } from '../networks/api';

export const useSuperHeroData = heroId => {
  return useQuery(['super-hero', heroId], () => fetchHeroById(heroId));
};
