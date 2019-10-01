const defaultState = [
  {
    id: 1,
    name: "Tanque 1",
    fisehesQuantity: 100,
    fishesWeight: 50,
    fishesMeasure: 10,
    foodType: 30,
    dailyFood: 100,
    initialDate: new Date(),
    edit:false
  },
  {
    id: 2,
    name: "Tanque 2",
    fisehesQuantity: 100,
    fishesWeight: 50,
    fishesMeasure: 10,
    foodType: 30,
    dailyFood: 100,
    initialDate: new Date(),
    edit:false
  },
  {
    id: 3,
    name: "Tanque 3",
    fisehesQuantity: 100,
    fishesWeight: 50,
    fishesMeasure: 10,
    foodType: 30,
    dailyFood: 100,
    initialDate: new Date(),
    edit:false
  },
  {
    id: 4,
    name: "Tanque 4",
    fisehesQuantity: 100,
    fishesWeight: 50,
    fishesMeasure: 10,
    foodType: 30,
    dailyFood: 100,
    initialDate: new Date(),
    edit:false
  }
];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "editTank": {
      return state.map(tank =>
        tank.id === payload ? {...tank , edit: !tank.edit} : tank
      );
    }
    case "saveTank": {
      return state.map(tank =>
        tank.id === payload[0] ? {...tank , ...payload[1]}:tank
      );
    }
    default:
      return state;
  }
};

export default reducer;
