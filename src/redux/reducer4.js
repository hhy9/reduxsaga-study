import produce from "immer"


const prevState = {
    user: {
        name: 'mike',
        friends: [
            {
                name: 'jane',
                age: 23 // 이 age하나를 수정하는데 위로 타고올라가면서 배열 user등 각 레퍼런스들을 다 수정해야함 
            },
            {
                name: 'jake',
                age: 24
            },
        ],
    },
    products: [],
}

const nextState = produce(prevState, draft => {
     draft.user.friends[0].age = 32;
});
console.log('prevState === nextState', prevState === nextState); // false
console.log(
    'prevState.user.friends[0] === nextState.user.friends[0]',
    prevState.user.friends[0] === nextState.user.friends[0]
); // false
console.log(
    'prevState.user.friends[1] === nextState.user.friends[1]',
    prevState.user.friends[1] === nextState.user.friends[1]
); // true
console.log(
    'prevState.products === nextState.products',
    prevState.products === nextState.products
); // true


