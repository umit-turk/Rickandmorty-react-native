import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = async () => {
  try {
    const response = await api.get('/character');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
