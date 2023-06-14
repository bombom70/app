import { all } from 'redux-saga/effects'
import { watchPostsSaga } from './postsSaga'
import { watchPostSaga } from './postSaga'
import { watchCommentsSaga } from './commentsSaga'

export function* rootWatcher() {
  yield all([
    watchPostsSaga(),
    watchPostSaga(),
    watchCommentsSaga(),
  ])
}