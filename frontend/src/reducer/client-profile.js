const D23_001 = 'Profile is required';
const D23_002 = 'Invalid Profile';

const validateProfile = (profile) => {
  if (!profile) {
    throw new Error(D23_001);
  }
  const {
    planterbox, _id, firstName, location
  } = profile;

  if (!firstName) {
    throw new Error(D23_002);
  }
  return undefined;
};

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CLIENT_PROFILE_SET':
      // validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
