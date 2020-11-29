<template>
    <div>
        1112223
        {{test}}
        {{test2}}
        {{test3}}
        <button @click='add'>add</button>
    </div>
</template>
<script>
    import {store} from './store';
    import {vxstore} from './vx-store';
    window.vxstore = vxstore;
    let data = {a: 1};
    export default {
        components: {
        },
        data () {
            return {
            };
        },
        computed: {
            test () {
                return store.state.a;
            },
            test2 () {
                return data.a;
            },
            test3 () {
                return vxstore.state.a;
            }
        },
        created () {
            
        },
        methods: {
            add () {
                data.a += 1;
                store.commit.addA();
                // vxstore.state.a += 1;
                // this.$forceUpdate();
            }
        },
        mounted () {
        }
    };
</script>

