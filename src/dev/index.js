

import Vue from 'vue/dist/vue.esm';
import {store} from './store';
import Main from './main.vue';

function main () {
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.append(container);
    new Vue({
        render: h => h(Main)
    }).$mount('#container');
    window.store = store;
    // window.Main = Main;

}

main();