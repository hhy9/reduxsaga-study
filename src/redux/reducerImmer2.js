import produce from "immer";

function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      // ...
      case SET_SELECT_PEOPLE:
        //   draft.selectedPeople = draft.peopleList.find(
        //       item => item.id === action.id
        //   )
        draft.selectedPeople = action.id;
            break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find(item => item.id === action.id );
        people.name = action.name;
        break;
    }
  });
}

// set_selected_people이라는 액션에서 peopleList에 있는 아이템을 하나를 가져와서 
// selectedPeople에 저장을 함 -> 그리고 밑에있는 액션에서도 마찬가지로 배열에서 
// 아이템 하나를 가져와서 name을 수정함 그러면 새로운 객체가 만들어짐 
// 여기서 문제는 위에껄 수정햇다고해도 밑에 액션에서 가지고있는 selectedPeople은 예전꺼이기때문에
// 위에선 name이 변경된거말고 그전값으로 가리킴 그래서 객체를 가르킬때는 레퍼런스가아니라
// 고유한 아이디값을 이용하는게 좋음 draft.selectedPeople = action.id; 이렇게 아이디값만 참고해서
// 나중에 이값을 활용하는게 좋음 