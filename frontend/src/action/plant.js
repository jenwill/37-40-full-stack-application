import uuid from 'uuid';

const create = ({ commonName, placement, notes }) => ({
  type: 'PLANT_CREATE',
  payload: {
    commonName: commonName,
    placement: placement,
    notes: notes,
    id: uuid(),
  },
});

const update = plant => ({
  type: 'PLANT_UPDATE',
  payload: plant,
});

const remove = plant => ({
  type: 'PLANT_REMOVE',
  payload: plant,
});

export { create, update, remove };
