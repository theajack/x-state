

declare interface dispatchStatic{
    (): Promise<any>;
}

declare interface XStateStatic{
    dispatch: {
        [key: string]: dispatchStatic
    };
}

declare interface buildXStateStatic{
    (data: {

    }): XStateStatic;
}

export declare class XState {
    constructor();
    dispatch: {
        [key: string]: dispatchStatic
    };
}

export let buildXState: buildXStateStatic;