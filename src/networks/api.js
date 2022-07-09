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

export const fetchHeroById = async id => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response;
};

export const RQfetchFriends = async () => {
  const response = await axios.get(`http://localhost:4000/friends`);
  return response;
};

export const fetchUserByEmail = async id => {
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  return response;
};

export const fetchStacksByUserName = async id => {
  const response = await axios.get(`http://localhost:4000/stacks/${id}`);
  return response;
};

export const fetchColors = pageNumber => {
  const response = axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
  return response;
};
