import produce from "immer";

const person = { name: 'mike', age: 22 };
const newPerson = produce(person, draft=> { // produce라는 것을 가져와서 호출 ->
     draft.age = 32; // 첫번째 매개변수에 변경하려는 객체를 넣고 두번째는 상태값을 변경하는 로직을 작성 
})                  // 그러면 newPerson은 새로운 객체로 생성 

// 객체를 불변으로 하기위해 코드가 작성이 다소 번거로울수있음
// 이를위한 라이브러리가 존재
