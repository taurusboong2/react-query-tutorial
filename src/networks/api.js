import axios from 'axios';

const BASE_URL = 'http://localhost:4000/superheroes';

export const fetchHeroes = async () => {
  const response = await axios.get(BASE_URL);
  return response;
};
