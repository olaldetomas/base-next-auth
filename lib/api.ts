import { fetchApi } from './fetch-api';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';

export const getApi = async (url: string) => {
  return await fetchApi(url, { method: GET });
};

export const postApi = async (url: string, body: object) => {
  return await fetchApi(url, { method: POST, body: JSON.stringify(body) });
};

export const putApi = async (url: string, body: object) => {
  return await fetchApi(url, { method: PUT, body: JSON.stringify(body) });
};

export const saveUser = async userData => {
  return await postApi('/user', userData);
};
