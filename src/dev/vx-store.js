
import Vue from 'vue/dist/vue.esm';
import vuex from 'vuex';

Vue.use(vuex);

export let vxstore = new vuex.Store({
    state: {
        a: 1
    },
});