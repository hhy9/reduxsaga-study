import React from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import FriendMain from './NOreact-redux/friend/container/FriendMain';
import TimelineMain from './NOreact-redux/timeline/container/TimelineMain';

export default function App() {
  return (
    // provider로 데이터를 제공해주고 
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  );
}

// const printLog = store => next => action => {
//   console.log(`prev state = ${JSON.stringify(store.getState())}`);
//  const result = next(action); // next를 호출햇을때는 최종적으로 리듀서가 호출이 되기 때문에 리듀서에서 상태값을 변경함 
//  console.log(`next state = ${JSON.stringify(store.getState())}`);
//  return result;
// }

// const myReducer = (state = { name: 'mike' },action) => {
//   console.log('myReducer');
//   if(action.type ==='someAction') {
//     return {name: 'mike2'}
//   }
//   return state;
// }


// const store = createStore(myReducer,applyMiddleware(printLog));
// store.dispatch({ type: 'someAction' }); 
