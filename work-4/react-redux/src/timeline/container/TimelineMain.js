import React from 'react';
// import React, { useEffect, useReducer } from 'react';
// import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';
import { useSelector, useDispatch } from 'react-redux';

export default function TimelineMain() {
    const timelines = useSelector(state => state.timeline.timelines);
    const dispatch = useDispatch();
    // const [, forceUpdate] = useReducer(v => v + 1, 0);
    // useEffect(() => {
    //     let prevTimeline = store.getState().timeline.timelines;
    //     const unsubscribe = store.subscribe(() => {
    //         const timelines = store.getState().timeline.timelines;
    //         if(prevTimeline !== timelines) {
    //             forceUpdate()
    //         }
    //         prevTimeline = timelines;
    //     });
    //     return () => unsubscribe();
    // }, []);
    function onAdd() {
        const timeline = getNextTimeline();
        dispatch(addTimeline(timeline));
        // store.dispatch(addTimeline(timeline));
    }
    console.log("TimelineMain render");
    // const timelines = store.getState().timeline.timelines;
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} />
        </div>
    );
}