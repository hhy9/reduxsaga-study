const reducer = createReducer(INITIAL_STATE, {
    [ADD] : (state, action) => state.todos.push(action.todo),
    [REMOVE_ALL]: state => (state.todos = []),
    [REMOVE]: (state,action) =>
        (state.todos = state.todos.filter(todo => todo.id !== action.id))
})

// createRducer라는 함수를 만들어서 많이사용함
// 객체를 만들어서 핸들러 함수를 작성하고 객체의 키는 액션타입/ 그리고 각각 함수를 작성
// 