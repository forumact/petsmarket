import { takeEvery, call, put } from "redux-saga/effects";
import { SET_BLOGS, GET_BLOGS } from "../actions";
import { fetchBlogList } from "../../Networks";

export const watchGetBlogs = function*() {
  yield takeEvery(GET_BLOGS, workerGetBlogs);
};

function* workerGetBlogs(action) {
  try {
    const result = yield call(fetchBlogList, action.payload);
    yield put({ type: SET_BLOGS, value: result.data });
  } catch (err) {
    console.log(err);
  }
}
