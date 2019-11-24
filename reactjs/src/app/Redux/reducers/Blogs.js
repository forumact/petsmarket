import { SET_BLOGS } from "../actions";

const blogs = (state = {}, action) => {
  switch (action.type) {
    case SET_BLOGS:
      return { ...action.value };
    default:
      return state;
  }
};

export default blogs;
