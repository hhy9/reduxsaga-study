import produce from "immer"


function createReducer(initalState, handleMap) { // 초기값과 handlerMap을 받아서 함수를 반환 
    return function (state = initalState, action ) { // 이 함수가 리듀서 
        return produce(state, draft => {
            const handler = handleMap[action.type];
            if(handler) {
                handler(draft, action);
            }
        })
    }
}