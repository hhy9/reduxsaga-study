function addTodo ({ title, priority }) {
     return { type: 'todo/ADD', title, priority };
}

function removeTodo({ id }) {
     return { type: 'todo/REMOVE', id };
}

function removeAllTodo() {
    return { type: 'todo/REMOVE_ALL' };
}

//위에처럼 action creator 함수를 만들어서 
// 그것을 호출해서 입력함 이렇게 함수를 만드는 이유는 액션 객체의 구조를 일관성있게 만들기 위함


store.dispatch(addTodo({ title:'영화 보기', priority: 'high' }));
store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeAllTodo());

// 밑에처럼 이렇게 타입 다쓰면 title말고 다른 걸 적을수도잇고 그리고 각각의 액션 타입이 어떤 액션 객체를 가지고있는지 알기 힘들수있음 
store.dispatch({ type: 'todo/ADD', title: '영화보기', priority: 'high' });
store.dispatch({ type: 'todo/REMOVE', id: 123 });
store.dispatch({ type: 'todo/REMOVE_ALL' });