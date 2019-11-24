import { takeEvery, call, put } from "redux-saga/effects";
import { SET_USER, GET_USER } from "../actions";
import { login } from "../../Networks";

export const watchGetUser = function*() {
  yield takeEvery(GET_USER, workerGetUser);
};

function* workerGetUser(action) {
  try {
    const result = yield call(login, action.payload);
    yield put({ type: SET_USER, value: result.data });
  } catch (e) {
    console.log("Failed", e);
  }
}
