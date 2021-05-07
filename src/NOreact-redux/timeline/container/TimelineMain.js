import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../common/mockData";
import store from '../../common/store'
import TimelineList from "../component/TimelineList";
import { actions } from "../state";

// export default function TimelineMain () {
//     const [, forceUpdate] = useReducer(v => v + 1,0);
//     useEffect(() => {
//         let prevTimelines = store.getState().timeline.timelines;
//         const unsubscribe = store.subscribe(()=> { 
//             const timelines = store.getState().timeline.timelines;
//             if( prevTimelines !== timelines ){
//                 forceUpdate()
//             }
//              });
//         return () => unsubscribe();
//     },[]);

//     function onAdd() {
//         const timeline = getNextTimeline();
//         store.dispatch(addTimeline(timeline));
//     }
//     console.log('timelineMain render');
//     const timelines = store.getState().timeline.timelines;
//     return (
//         <div>
//             <button onClick={onAdd}>타임라인 추가</button>
//             <TimelineList timelines={timelines} />
//         </div>
//     )
// }


export default function TimelineMain () {

    const dispatch = useDispatch();
    const timelines = useSelector(state => state.timeline.timelines);
    const isLoading = useSelector(state => state.timeline.isLoading);
    function onAdd() {
        const timeline = getNextTimeline();
        store.dispatch(actions.addTimeline(timeline));
    }

    function onLike(e) {
        console.log(e.target.dataset.id)
        const id = Number(e.target.dataset.id);
        const timeline = timelines.find(item => item.id === id);
        console.log(timeline)
        dispatch(actions.requestLike(timeline))
    }
  
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike}/>
            {isLoading && <p>전송 중...</p>}
        </div>
    )
}