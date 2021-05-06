function reducer(state = INITIAL_STATE, action ) {
     switch(action.type) {
         // ...
         case REMOVE_ALL:
             return {
                 ...state, // 이때 불변객체로 관리하기 위해서 spread operator를 사용해서 새로운 값을 반환
                 todos: []
             }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
     }
}

const INITIAL_STATE = { todos: [] };

// 리듀서는 액션이 발생했을 때 새로운 상태값을 만드는 함수 
// 리덕스의 상태값을 수정하는 유일한 방법은 액션 객체와 함께 dispatch 메서드를 호출하는것
// 다른 어떤 방법으로도 상태값을 수정하면 안됨.
// 상태값은 dispatch 메서드가 호출된 순서대로 리덕스 내부에서 변경되기 때문..
// 상태값은 불변객체로 관리
