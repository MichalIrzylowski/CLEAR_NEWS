import { take, fork, call, put } from "redux-saga/effects";
import { api } from "../handlers/api";
import action from "../reducer/actionTypes";

function* loadLatestStories() {
  while (true) {
    yield take(action.LATEST_STORIES_REQUEST);
    const path = "/api/latest_stories";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: action.LOAD_LATEST_STORIES_SUCCESS,
        payload: response
      });
    } catch (error) {
      yield console.log(error);
    }
  }
}

export default function* rootSaga() {
  yield fork(loadLatestStories);
}
