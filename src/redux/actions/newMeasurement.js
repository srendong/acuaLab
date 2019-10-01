export const type = "newMeasurement";

const newMeasure = measurement => {
  return {
    type,
    payload: measurement
  };
};

export default newMeasure;