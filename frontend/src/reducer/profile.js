const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'PROFILE_CREATE':
      return [...state, payload];
    case 'PROFILE_UPDATE':
      return state.map(profile => (profile.id === payload.id ? payload : profile));
    case 'PROFILE_REMOVE':
      return state.filter(profile => profile.id !== payload.id);
    default:
      return state;
  }
};
