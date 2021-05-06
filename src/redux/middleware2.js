import { applyMiddleware, createStore } from "redux";

const middleware1 = store => next => action => {
     console.log('middleware1 start');
     const result = next(action);
     console.log('middleware1 end');
     return result;
};

// next는 사실상 이 미들웨어 입력된 이 전체함수를 의미함.
const middleware2 = store => next => action => {
     console.log('middleware2 start');
     const result = next(action); // 여기서 next는 리듀서(그다음 미들웨어는 없기때문에 ) 마지막 미들웨어에서는 리듀서를 호출한다.
     console.log('middleware2 end');
     return result;
};

//리듀서 작성
const myReducer = (state,action) => {
     console.log('myReducer');
     return state;
}

// 스토어 생성 
const store = createStore(myReducer,applyMiddleware(middleware1,middleware2));
store.dispatch({ type: 'someAction' }); // action을 발생시킴 

// 두개의 미들웨어 입력 

// console.log찍어보면 리듀서가 먼저 출력 -> 초기에 상태값을 초기화하기 위해서 미들웨어 없이 
//  리듀서만 호출하는 단계 -> 그이후에 액션이 발생했을때는 마지막 코드에서 dispatch가 발생햇을때
//   console.log('middleware1 start');console.log('middleware2 start'); onsole.log('myReducer');   console.log('middleware2 end');  console.log('middleware1 end');
// 이렇게 출력됨 
//액션이 발생했을때 미들웨어 부터 처리가 되는것( store.dispatch)
