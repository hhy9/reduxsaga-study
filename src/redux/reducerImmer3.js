import produce from "immer";

function reducer(state = INITIAL_STATE, action ) {
    return produce(state, draft => {
        switch (action.type) {
            case SAY_HELLO:
                const random = Math.floor(Math.random() * 10 + 1);
                draft.msg = `안녕하세요, ${action.name}님의 행운의 숫자는 ${random}입니다.`;
                break;
            
            case INCREMENT:
                callApi({ url: '/sendActionLog', data: action });
                draft.value += 1;
                break;
                // ...
        }
    });
}

// 리듀서는 순수함수로 작성을 해야함
// 순수함수가 되려면 부수효과가 없어야함 
// 부수효과라는것은 외부상태를 변경하는 건데 서버 api를 호출하는것도 그러한 것중에 하나 
// 그래서 서버 api를 리듀서에서 호출하면 안되고 그리고 순수함수가 되려면 
// 입력이 같을때 같은 출력을 줘야함 그래서 random사용은 x
// 타임함수도 마찬가지로 사용하지않는게좋음
// 랜덤값이 필요하다면 액션객체를 만들때 그때 random을 호출해서 데이터를 만들어서 넣어주면됨
// 그리고 그 랜덤값을 이 리듀서안에서 활용
