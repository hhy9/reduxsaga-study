function reducer(state = INITIAL_STATE, action ) {
    switch(action.type) {
        // ...
        case ADD:
            return {
                ...state, // 이때 불변객체로 관리하기 위해서 spread operator를 사용해서 새로운 값을 반환
                todos: [
                    ...state.todos,
                    { id: getNewId(), title: action.title, priority: action.priority },
                ]
            }
    }
}

// 수정하려는 속성값이 깊은 곳에 있다면 이렇게 매번 전개연산자를 사용하는것이 불편할수있음
