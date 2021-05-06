const reportCrash = store => next => action => {
    try {
        return next(action); // 리듀서에서 뭔가 처리를 잘못했을때 , 예외가 발생했을때 그것을 catch해서 서버로 예외를 전송함 
    } catch (err) {
        //서버로 예외 정보 전송
    }
}