const printLog = store => next => action => {
     console.log(`prev state = ${JSON.stringify(store.getState())}`);
    const result = next(action); // next를 호출햇을때는 최종적으로 리듀서가 호출이 되기 때문에 리듀서에서 상태값을 변경함 
    console.log(`next state = ${JSON.stringify(store.getState())}`);
    return result;
}

// 미들웨어의 활용 예 