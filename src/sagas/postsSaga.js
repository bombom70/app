import { call, put, takeEvery } from 'redux-saga/effects'
import { getPostsSuccess } from '../store/slices/postsSlice'
import { getPosts } from '../api'

function* getPostsFetch() {
  const posts = yield call(getPosts)
  yield put(getPostsSuccess(posts))
}

export function* watchPostsSaga() {
  yield takeEvery('posts/getPostsFetch', getPostsFetch)
}