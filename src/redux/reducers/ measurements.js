const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "newMeasurement": {
      return state.concat(payload);
    }
    default:
      return state;
  }
};

export default reducer;
