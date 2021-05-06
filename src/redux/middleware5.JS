const saveToLocalStorage = store => next => action => {
     if(action.meta?.localStorageKey) {
         localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
     }
     return next(action);
}

// 로컬스토리지에 저장을 해주는 미들웨어임
// meta.localStorageKey라는게 있으면 액션 객체를 저장해줌 