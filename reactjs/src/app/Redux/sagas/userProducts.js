import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USER_PRODUCTS, SET_USER_PRODUCTS } from "../actions";
import { fetchUserPigeons } from "../../Networks";

export const watchGetUserProducts = function*() {
  yield takeEvery(GET_USER_PRODUCTS, workerGetUserProducts);
};

function* workerGetUserProducts(actions) {
  try {
    const result = yield call(fetchUserPigeons, actions.payload);
    yield put({ type: SET_USER_PRODUCTS, value: result.data });
  } catch (err) {
    console.log(err);
  }
}
