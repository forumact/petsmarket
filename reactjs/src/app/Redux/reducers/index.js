import user from "./users";
import products from "./products";
import userProducts from "./userProducts";
import blogs from "./Blogs";
import { combineReducers } from "redux";
import userFavourites from "./userFavourites";

const rootReducer = combineReducers({
  user: user,
  products: products,
  userProducts: userProducts,
  userFavourites: userFavourites,
  blogs: blogs,
});

export default rootReducer;
