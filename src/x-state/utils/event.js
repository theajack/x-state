
/**
 * November 7th, 2019
 * Event BUS
 */
import {isUndf, isObject} from './util';

let events = {}; // 事件回调函数字典
let EVENT = {}; // 事件名称字典

export function checkEvent (name) {
    if (events[name]) {
        return true;
    } else {
        return false;
    }
}

// 初始化一个事件

function init (name) {
    if (isUndf(EVENT[name])) {
        events[name] = new _event(name);
        EVENT[name] = name;
    }
}

// 注册某个事件的一个或多个回调

function regist (name, listener) {
    // json 格式传入可以注册个事件
    if (isObject(name)) {
        for (let key in name) {
            regist(key, name[key]);
        }
        return;
    }
    if (!checkEvent(name)) {
        init(name);
    }
    events[name].regist(listener);
}

// 移除事件回调

function remove (name, listener) {
    if (!checkEvent(name)) {
        console.warn('removeEvent:未找到事件 ' + name);
        return false;
    }
    if (isUndf(listener)) {// 移除所有监听
        console.error('请传入要移除的listener');
        return false;
    } else {// 移除单个监听
        let index = events[name].listeners.indexOf(listener);
        if (index === -1) {
            console.warn('removeEvent:未找到监听函数 ' + name);
            return false;
        } else {
            events[name].listeners.splice(index, 1);
            return true;
        }
    }
}
// 移除单个事件或是所有
function clear (name) {
    if (typeof name === 'string') {
        if (events[name]) {
            delete events[name];
        }
    } else if (name instanceof Array) {
        name.forEach(n => {
            clear(n);
        });
    } else {
        events = {};
    }
}

// 触发事件
function emit (name, data) {
    if (checkEvent(name)) {
        events[name].emit(data);
    } else {
        // console.warn('错误的事件：' + name);
    }
}

// 事件类
class _event {
    constructor (name) {
        this.name = name;
        this.listeners = [];
    }
    regist (listener) {
        this.listeners.push(listener);
    }
    emit (data) {
        // 倒序方式执行，用于修复事件中有removeEvent导致的bug
        for (let i = this.listeners.length - 1; i >= 0; i--) {
            this.listeners[i](data);
        }
    }
}

export default {
    EVENT, // 事件枚举
    // init, // 初始化一个事件（注册一个发布者） // 初始化与注册和到一起
    emit, // 触发事件
    regist, // 注册一个监听者
    checkEvent, // 检查是否存在事件
    remove,
    clear
};