<template>
    <div>
        1112223
        {{test}}
        <button @click='add'>add</button>
    </div>
</template>
<script>
    import {store} from './store';
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
            }
        },
        created () {
            
        },
        methods: {
            add () {
                store.commit.addA();
                this.$forceUpdate();
            }
        },
        mounted () {
        }
    };
</script>

