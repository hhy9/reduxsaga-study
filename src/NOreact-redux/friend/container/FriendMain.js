import { useEffect, useReducer } from "react";
import store from '../../common/store'
import { addFriend } from "../state";
import { getNextFriend } from '../../common/mockData'
import FriendList from "../component/FriendList";

export default function FriendMain () {
    const [, forceUpdate] = useReducer(v => v + 1,0);
    useEffect(() => {
        let prevFriends = store.getState().friend.friends;
        const unsubscribe = store.subscribe(()=> { 
            
            const friends = store.getState().friend.friends;
            if(prevFriends !== friends) {
                forceUpdate() // 이게 무조건 호출되어서 둘다 console.log에 뜸
            }
          }); 
          prevFriends = friends;

        return () => unsubscribe();
    },[]);

    function onAdd() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }
    console.log('FriendMain render');
    const friends = store.getState().friend.friends;
    console.log(friends)
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    )
}