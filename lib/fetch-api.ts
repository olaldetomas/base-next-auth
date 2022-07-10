const BASE_URL = '/api';
const HOST = 'http://localhost:3000';

export const fetchApi = async (url: string, options: any = {}) => {
  const headers = options.headers || {};
  const completeUrl = HOST + BASE_URL + url;

  const completeOptions = {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  const res = await fetch(completeUrl, completeOptions);
  let jsonResponse;

  try {
    jsonResponse = await res.json();
  } catch (e) {
    throw res;
  }

  if (res.status >= 200 && res.status < 300) {
    return jsonResponse;
  } else {
    throw jsonResponse;
  }
};
