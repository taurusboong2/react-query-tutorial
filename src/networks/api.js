import axios from 'axios';

const BASE_URL = 'http://localhost:4000/superheroes';

export const fetchHeroes = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const RQfetchHeroes = async () => {
  const response = await axios.get(BASE_URL);
  return response;
};
