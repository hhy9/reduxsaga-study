import { createStore } from "redux";


const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
    INCREMENT: state => (state.value += 1),
});

const store = createStore(reducer);

let prevState;
store.subscribe(() => {
     const state = state.getState();
     if(state === prevState) {
         console.log('상탯값 같음');
     } else {
         console.log('상태값 변경됨');
     }
     prevState = state;
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'OTHER_ACTION' });
store.dispatch({ type: 'INCREMENT' });

// 리덕스에서 스토어를 만들때는 createStore라는 함수를 이용함
// 거기에 리듀서를 넣어서 호출해주면 스토어가 생성이됨
// 스토어는 상태값을 저장하는 역할도 있고 그리고 액션처리가 끝낫다는것을 외부에 알려주는 역할도 함
// 그 액션처리가 끝낫다는 이벤트를 받기 위해서는 스토어의 subscribe메서드를 호출해서 
// {
//     const state = state.getState();
//     if(state === prevState) {
//         console.log('상탯값 같음');
//     } else {
//         console.log('상태값 변경됨');
//     }
//     prevState = state; // 여기에선 이전 상태값을 저장 
// }); 이렇게 함수를 입력하면됨 

// 그러면 이렇게 액션을 발생시키고 액션에대한 처리가 끝나면 위에함수가 호출됨
