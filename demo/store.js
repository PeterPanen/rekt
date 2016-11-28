let state = null;
let subscribers = [];

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_ADD':
      return {
        counter: state.counter += action.payload,
      }
    case 'COUNTER_SUBTRACT':
      return {
        counter: state.counter -= action.payload,
      }
    case 'COUNTER_SET':
      return {
        counter: state.counter = action.payload,
      }
    default:
      return state;
  }
}

export const getState = () => {
  return state;
}

export const dispatch = (action) => {
  const actionObject = typeof(action) === 'function' ? action(getState) : action;
  if (!actionObject) { return };

  const nextState = reducer(state || undefined, actionObject);
  state = nextState;
  subscribers.map((cb) => cb(state));
}

export const subscribe = (cb) => {
  subscribers.push(cb);
  if (subscribers.length === 1) {
    dispatch({type: 'INITIALIZE'});
  }
}
