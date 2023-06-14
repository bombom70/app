import { call, takeEvery, put } from 'redux-saga/effects'
import { getCommentSuccess } from '../store/slices/commentsSlice'
import { getComments } from '../api'

function* commentsSaga({payload}) {
  console.log("SAGA COMMENTS")
  const commentsData = yield call(getComments, payload)
  yield put(getCommentSuccess(commentsData))
}

export function* watchCommentsSaga() {
  yield takeEvery('comments/getCommentsFetch', commentsSaga)
}
