import { all } from "redux-saga/effects";
import { watchGetUser } from "./users";
import { watchGetProducts } from "./products";
import { watchGetUserProducts } from "./userProducts";
import { watchGetBlogs } from "./blogs";
import { watchGetUserFavourites } from "./userFavourites";

export default function*() {
  yield all([
    watchGetUser(),
    watchGetProducts(),
    watchGetUserProducts(),
    watchGetUserFavourites(),
    watchGetBlogs()
  ]);
}
