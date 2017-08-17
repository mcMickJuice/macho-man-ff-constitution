import { get, post } from 'axios';

export const getActiveTeams = () => {
  return get('/api/teams').then(resp => {
    return resp.data;
  });
};

export const createNewResult = rawResult => {
  return post('/api/result', rawResult);
};
