import { SET_USER_PRODUCTS } from "../actions";

const userproducts = (state = [], action) => {
  switch (action.type) {
    case SET_USER_PRODUCTS:
      return { ...action.value };
    default:
      return state;
  }
};

export default userproducts;
