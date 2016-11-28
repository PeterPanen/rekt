export const add = value => ({
  type: 'COUNTER_ADD',
  payload: value,
});


export const subtract = value => getState => {
  if (getState().counter - value < 0) { return; }

  return {
    type: 'COUNTER_SUBTRACT',
    payload: value,
  }
};

export const set = (value) => ({
  type: 'COUNTER_SET',
  payload: value
});
