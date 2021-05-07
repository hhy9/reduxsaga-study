// saga에선 제너레이터 중요
// ## redux-thunk

import { actions,types } from "../state";
import { all, call, put, take, takeLeading } from 'redux-saga/effects'

import {callApiLike} from '../api'


//  -비동기 로직이 간단할 때 사용

//  -가장 간단하게 시작할 수 있다.

// ## redux-observable

//  -비동기 코드가 많을 때 사용

//  -RxJS 패키지를 기반으로 만들어졌다.

//     -리액티브 프로그래밍을 공부해야 하므로 진입장벽이 가장 높다.

// ## redux-saga

//  -비동기 코드가 많을 때 사용

// -제너레이터를 적극적으로 활용한다.

// -테스트 코드 작성이 쉽다.

export function* fetchData(action) {
    yield put(actions.setLoading(true)); // put은 리덕스액션을 발생시킴
    yield put(actions.addLike(action.timeline.id,1)); // addlike => api성공햇다고 가정하고 like count올려줌
    yield call(callApiLike); // api호출 -> 호출끝나면 로딩을 false로
    yield put(actions.setLoading(false));
}

export default function* () {
    yield all([takeLeading(types.REQUEST_LIKE, fetchData)]) // 첫번째 액션이 발생했을때 두번째에 있는 함수를 실행(fetchData)
} // request_Like실행할때마다 위에 로직을 탐 

// all과 takeLeading은 redux-saga에서 제공

const a = take(types.REQUEST_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log({ a, b, c });
const logResult = {
    a: {
        TAKE: {
            pattern: 'timeline/REQUEST_LIKE',
        },
    },
    b: {
        PUT: { // put이 하는일은 리덕스 액션을 발생시키는것 
            channel: null,
            action: {
                type: 'timeline/SET_LOADING',
                isLoading: false,
            }
        },
    },
    c: {
        CALL: {
            context: null,
            fn: callApiLike,
            args: []
        }
    }
}