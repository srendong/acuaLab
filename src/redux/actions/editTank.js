export const type = "editTank";

const editTank = id => {
  return {
    type,
    payload: id
  };
};

export default editTank;