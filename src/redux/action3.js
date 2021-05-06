export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

// 리듀서에서도 사용하니까 상수 변수로 만드는게 좋음

function addTodo ({ title, priority }) {
    return { type: ADD , title, priority };
}

function removeTodo({ id }) {
    return { type: REMOVE , id };
}

function removeAllTodo() {
   return { type: REMOVE_ALL };
}
