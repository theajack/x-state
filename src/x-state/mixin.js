export default function (Vue) {
    const version = Number(Vue.version.split('.')[0]);
  
    if (version >= 2) {
        Vue.mixin({beforeCreate: xStateInit});
    } else {
        // override init and inject vuex init procedure
        // for 1.x backwards compatibility.
        const _init = Vue.prototype._init;
        Vue.prototype._init = function (options = {}) {
            options.init = options.init
                ? [xStateInit].concat(options.init)
                : xStateInit;
            _init.call(this, options);
        };
    }
  
    function xStateInit () {
        const options = this.$options;
        // store injection
        if (options.store) {
            this.$store = typeof options.store === 'function'
                ? options.store()
                : options.store;
        } else if (options.parent && options.parent.$store) {
            this.$store = options.parent.$store;
        }
    }
}