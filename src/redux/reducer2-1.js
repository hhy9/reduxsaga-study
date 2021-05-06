const state = {
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

// 이렇게 불변상태의 장점은
// prevState ==== nextState  이전과 다음상태를 단순 비교로 가능
