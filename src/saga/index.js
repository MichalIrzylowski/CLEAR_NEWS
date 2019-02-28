import { take, fork, call, put, delay } from "redux-saga/effects";
import { api } from "../handlers/api";
import action from "../reducer/actionTypes";

//REMEMBER TO REMOVE ALL BELOW INPUTS LATER!!!
import { ArticlesData } from "../components/static_data/latest_stories";
import { inPicturesData } from "../components/static_data/inPictures";

function* loadLatestStories() {
  while (true) {
    yield take(action.LATEST_STORIES_REQUEST);
    const path = "/api/latest_stories";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: action.LOAD_LATEST_STORIES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      yield put({
        type: action.LOAD_LATEST_STORIES_SUCCESS,
        payload: ArticlesData
      });
    }
  }
}

function* loadInPictures() {
  while (true) {
    yield take(action.LOAD_IN_PICTURES_REQUEST);
    const path = "/api/in_pictures";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: action.LOAD_IN_PICTURES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      yield put({
        type: action.LOAD_IN_PICTURES_SUCCESS,
        payload: inPicturesData
      });
    }
  }
}

function* loadEconomyNews() {
  while (true) {
    yield take(action.LOAD_ECONOMY_NEWS_REQUEST);
    const path = "/api/latest_economy_news";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: action.LOAD_ECONOMY_NEWS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: action.LOAD_ECONOMY_NEWS_SUCCESS,
        payload: ArticlesData.filter(article => article.category === "economy")
      });
    }
  }
}

function* loadHealthNews() {
  while (true) {
    yield take(action.LOAD_HEALTH_NEWS_REQUEST);
    const path = "/api/latest_health_news";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: action.LOAD_HEALTH_NEWS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: action.LOAD_HEALTH_NEWS_SUCCESS,
        payload: ArticlesData.filter(article => article.category === "health")
      });
    }
  }
}

function* loadNews() {
  while (true) {
    const request = yield take(action.LOAD_NEWS_REQUEST);

    const { pageNumber, route, typeOfNews } = request;

    const path = `/api/news/${route}/${pageNumber}`;

    try {
      const response = yield call(api, "get", path);
      if (response.status === 204) {
        yield put({
          type: action.ALL_ARTICLES + "-" + typeOfNews
        });
      } else {
        yield put({
          type: action.LOAD_NEWS_SUCCESS + "-" + typeOfNews,
          payload: response.data
        });
      }
    } catch (error) {
      console.log("LOAD_NEWS", error);
      yield delay(1000); // remember to delete this!
      yield put({
        type: action.LOAD_NEWS_SUCCESS + "-" + typeOfNews,
        payload: ArticlesData.filter(article => article.category === route)
      });
    }
  }
}

export default function* rootSaga() {
  yield fork(loadLatestStories);
  yield fork(loadInPictures);
  yield fork(loadEconomyNews);
  yield fork(loadHealthNews);
  yield fork(loadNews);
}
