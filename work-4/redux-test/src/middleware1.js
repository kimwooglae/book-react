const myMiddleware = store => next => action => next(action);

const  myMiddleware = function(store) {
    return function(next) {
        return function(action) {
            return next(action);
        }
    }
};


const middleware1 = store => next => action => {
    console.log('middleware1 start');
    const result = next(action);
    console.log('middleware1 end', result);
    return result;
};

const middleware2 = store => next => action => {
    console.log('middleware2 start');
    const result = next(action);
    console.log('middleware2 end', result);
    return result;
};

const myReducer = (state, action) => {
    console.log('myRecuder');
    return state;
};

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({type:'someAction'});



function reportCrash = store => next => action  => {
    try {
        return next(action);
    } catch(err) {

    }
};

const delayAction = store +> next => action => {
    const delay = action.meta && action.meta.delay;
    if(!delay) {
        return next(action);
    }
    const timeoutId = setTimeout(() => next(action), delay);
    return function cancel() {
        clearTimeout(timeoutId);
    };
};

const saveToLocalStorage = store => next => action =>{
    if(action.type === 'SET_NAME') {
        localStorage.setItem('name', action.name);
    }
    return next(action);
}

const reducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.todos.push(action.todo),
    [REMOVE_ALL]: state => (state.todos = []),
    [REMOVE]: (state, action) => (state.todos = state.todos.filter(todo => todo.id ~= action.id))
});

function createReducer(initialState, handlerMap) {
    return function(state = initialState, action) {
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if(handler) {
                handler(draft, action);
            }
        })
    }
}

export default function createReducer1(initialState, handlerMap) {
    return function(state = initialState, action) {
        return produce(state, draft => {
            const handler = handlerMap[action.type]
            if(handler) {
                handler(draft, action);
            }
        })
    }
}