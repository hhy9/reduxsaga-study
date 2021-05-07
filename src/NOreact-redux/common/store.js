import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';
import timelineSaga from '../timeline/state/saga'
import createSagaMiddleware  from 'redux-saga';
import { all } from "@redux-saga/core/effects";

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer
})
// const store = createStore(reducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

// 미들웨어 실행
function* rootSaga() {
    yield all([timelineSaga()]); // 추가될때마다 all([timelineSaga(),friendSaga()])이렇게 가능
}
sagaMiddleware.run(rootSaga)
export default store;