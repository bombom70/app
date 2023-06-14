import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import postsReducer from './slices/postsSlice';
import postReducer from './slices/postSLice';
import commentsReducer from './slices/commentsSlice';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../sagas/index'
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootWatcher)