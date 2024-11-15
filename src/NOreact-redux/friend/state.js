import createReducer from "../common/createReducer";


const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

// action creator함수 
export const addFriend = friend => ({ type: ADD, friend });
export const removeFriend = friend => ({ type:REMOVE, friend });
export const editFriend = friend => ({ type: EDIT, friend });

//리듀서코드 
const INITIAL_STATE = { friend: [] }; // key와 value를 같이 입력해서 넘겨줌(그저 입력받기위한거라면 )
export const friendReducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.friends.push(action.friend),
    [REMOVE]: (state, action) =>
        (state.friends = state.friends.filter(
                friend => friend.id !== action.friend.id,
        )),
    [EDIT]: (state,action) => {
        const index = state.friends.findIndex(
            friend => friend.id === action.friend.id
        );
        if(index>=0) {
            state.friends[index] = action.friend;
        }
    }
})

export default friendReducer;
