import { call, takeEvery, put } from 'redux-saga/effects'
import { getPostSuccess } from '../store/slices/postSLice'
import { getPost } from '../api'

function* postSaga({payload}) {
  const postData = yield call(getPost, payload)
  yield put(getPostSuccess(postData))
}

export function* watchPostSaga() {
  yield takeEvery('post/getPostFetch', postSaga)
}
