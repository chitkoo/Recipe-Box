import Config from 'react-native-config';

const apiUrl = Config.API_URL;

export const getRecipes = async route => {
  let response = null;
  response = await fetch(apiUrl + route, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const resJson = await response.json();
  return resJson;
};


