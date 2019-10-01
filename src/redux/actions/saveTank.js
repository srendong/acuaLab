export const type = "saveTank";

const saveTank = (id,data) => {
  return {
    type,
    payload:[id,data]
  };
};

export default saveTank;