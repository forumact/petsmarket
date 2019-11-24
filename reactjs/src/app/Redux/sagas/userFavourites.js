import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USER_FAVOURITES, SET_USER_FAVOURITES } from "../actions";
import { fetchFlag } from "../../Networks";

export const watchGetUserFavourites = function*() {
  yield takeEvery(GET_USER_FAVOURITES, workerGetUserFavourites);
};

function* workerGetUserFavourites(actions) {
  try {
    const result = yield call(fetchFlag, actions.payload);
    yield put({ type: SET_USER_FAVOURITES, value: result.data });
  } catch (err) {
    console.log(err);
  }
}
