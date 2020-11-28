import {buildXState} from '../x-state';

let state = {
    a: 1,
    b: 2,
    c: 3,
};

let commit = {
    addA () {
        state.a += 1;
    }
};

let dispatch = {
    test () {
        return new Promise((res) => {
            setTimeout(() => {
                state.b = 3;
                res();
            }, 3000);
        });
    }
};

let getters = {
    aplus () {
        return state.a + 1;
    }
};

export let store = {
    state,
    commit,
    dispatch,
    getters,
};

store = buildXState(store);