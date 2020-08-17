import React, { useReducer } from 'react';

const INITIAL_STATE = {name: 'empty', age: 0};
function reducer(state, action) {
    switch(action.type) {
        case 'setName':
            return {...state, name: action.name};
        case 'setAge':
            return {...state, age: action.age};
        default:
            return state;
    }
}

export const ProfileDispatch = React.createContext(null);

export default function Profile() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <input type='text' value={state.name}
                onChange={e => dispatch({type: 'setName', name: e.currentTarget.value})} />
            <input type='number' value={state.age} 
                onChange={e => dispatch({type: 'setAge', age: e.currentTarget.value})} />
            <ProfileDispatch.Provider value={dispatch}>
                a<SomeCompoent />c
            </ProfileDispatch.Provider>
        </div>
    );
}


function SomeCompoent() {
    return <>b</>
}