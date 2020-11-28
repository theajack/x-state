import {warn} from './util';

export function mapData (xstate, data, name) {
    let newCommit = {};
    for (let k in data) {
        newCommit[k] = (...payloads) => {
            return data[k].call(xstate, ...payloads);
        };
    }
    xstate[name] = newCommit;
}

export function mapGetter (xstate, getters, state) {
    let properties = {};
    for (let k in getters) {
        properties[k] = {
            get () {
                return getters[k].call(xstate, state);
            },
            set () {
                warn('不能直接对getters赋值');
            }
        };
    }
    let newGetters = {};
    Object.defineProperties(newGetters, properties);
    Object.defineProperty(xstate, 'getters', {
        get () {return newGetters;},
        set () {
            warn('不能直接对getters赋值');
        }
    });
}

export function mapState (xstate, state) {
    let properties = {};
    for (let k in state) {
        properties[k] = {
            get () {
                return state[k];
            },
            set () {
                warn('不能直接对state赋值');
            }
        };
    }
    let newState = {};
    Object.defineProperties(newState, properties);
    Object.defineProperty(xstate, 'state', {
        get () {
            return newState;
        },
        set () {
            warn('不能直接对state赋值');
        }
    });
}