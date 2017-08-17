import { get } from 'axios';

export const getActiveTeams = () => {
  return get('/api/teams').then(resp => {
    return resp.data;
  });
};
