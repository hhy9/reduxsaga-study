const delayAction = store => next => action => {
    const delay = action.meta?.delay;
    if(!delay) {
        return next(action);
    } // 없다면 바로 호출 
    const timeoutId = setTimeout(() => next(action), delay); // 딜레이가 잇을경우 setTimeout으로 딜레이를 해줘서 리듀서를 늦게 실행하는 
    return function cancel() { // cancel이라는 함수를 반환 해줘서 밖에서 next가 실행되는게 취소가 될 수있게  
        clearTimeout(timeoutId);
    }
}