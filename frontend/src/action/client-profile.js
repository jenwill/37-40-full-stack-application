import superagent from 'superagent';
import * as routes from '../routes';

const setProfile = profile => ({
  type: 'CLENT_PROFILE_SET',
  payload: profile,
});

const createRequest = profile => (store) => {
  const { token } = store.getState();
  const parsedToken = JSON.parse(token);

  return superagent.post(`${API_URL}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${parsedToken.token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body._id));
    });
};

const updateRequest = profile => (store) => {
  const { token } = store.getState();
  const parsedToken = JSON.parse(token);

  return superagent.put(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${parsedToken.token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body._id));
    });
};

const fetchRequest = profile => (store) => {
  const { token } = store.getState();
  const parsedToken = JSON.parse(token);

  return superagent.get(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${parsedToken.token}`)
    .then((response) => {
      return store.dispatch(setProfile(response.body._id));
    });
};

export { setProfile, createRequest, updateRequest, fetchRequest };