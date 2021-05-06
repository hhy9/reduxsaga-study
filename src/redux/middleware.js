const myMiddleware = store => next => action => next(action);

// 하나의 미들웨어
// 이렇게 화살표함수로 여러번 감싸진이유는 마지막에서
// store와 next를 사용하기 위해서 
// 미들웨어를 작성할때 store가 필요할때가 많음 
// 그리고 next는 리덕스에서 만들어서 넘겨주는데 다음에 호출될 어떤 함수를 넘겨줌
