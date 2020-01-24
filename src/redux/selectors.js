export const getNameStore = store => store.name;

export const getName = store =>
  getNameStore(store) ? getNameStore(store).name : 'No Name';
