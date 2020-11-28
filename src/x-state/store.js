import {mapData, mapGetter, mapState} from './utils/store-util';

export class XState {
    constructor ({
        state,
        commit,
        dispatch,
        getters,
    }) {
        mapState(this, state);
        mapData(this, commit, 'commit');
        mapData(this, dispatch, 'dispatch');
        mapGetter(this, getters, state);
    }

    regist () {
        
    }
}

export function buildXState (options) {
    return new XState(options);
}