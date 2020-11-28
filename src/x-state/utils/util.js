export function warn (text) {
    console.warn(text);
}

export function isUndf (v) {
    return typeof v === 'undefined';
}

export function isObject (v) {
    return typeof v === 'object' && v !== null;
}