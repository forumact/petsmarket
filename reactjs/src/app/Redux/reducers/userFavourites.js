import { SET_USER_FAVOURITES } from "../actions";

const userFavourites = (state = [], action) => {
  switch (action.type) {
    case SET_USER_FAVOURITES:
      return { ...action.value };
    default:
      return state;
  }
};

export default userFavourites;
