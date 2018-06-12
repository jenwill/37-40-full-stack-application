import superagent from 'superagent';
import * as routes from '../routes';

// SYNC (these actions are objects)

const setProfile = profile => ({
  type: 'CLENT_PROFILE_SET',
  payload: profile,
});

const createRequest = profile => (store) => {
  const { token } = store.getState();

  return superagent.post(`${API_URL}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body.profile));
      // TODO update this to go with Bloomio back-end
      // Here we know that we want response.body.profile because that's
      // what the back-end of this app sent. Know your back-end, so you know what to use here.
    });
};

const updateRequest = profile => (store) => {
  const { token } = store.getState();

  return superagent.put(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body.profile));
      // TODO update this to go with Bloomio back-end
    });
};

const fetchRequest = () => (store) => {
  const { token } = store.getState();

  return superagent.get(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(setProfile(response.body.profile));
      // TODO update this to go with Bloomio back-end
    });
};

export { setProfile, createRequest, updateRequest, fetchRequest };
