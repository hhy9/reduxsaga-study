store.dispatch({ type: 'todo/ADD', title: '영화보기', priority: 'high' });
store.dispatch({ type: 'todo/REMOVE', id: 123 });
store.dispatch({ type: 'todo/REMOVE_ALL' });

// action은 type 속성값을 갖고 있는 객체.
// dispatch는 액션이 발생했다는 것을 리덕스에게 알려주는 함수
// { type: 'todo/ADD', title: '영화보기', priority: 'high' }<- 이게 액션 객체
// type속성값말고 원하는대로 다른 데이터들을 전달할수잇음 
// 이 데이터는 리듀서에서 받아서 처리를 함 
// 액션을 구분하기위해 type 속성값을 사용함=> 그러므로 type속성값은 유니크해야함
// 그래서 todo/ 이렇게 prefix를 붙여서 많이 사용함
// 
