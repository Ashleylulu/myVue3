<template>
    <div>
        <comps></comps>
    </div>
</template>
<script>
    import comps from '../components/Comps'
    import {provide,ref} from 'vue'

    export default {
        components:{comps},
        setup(){
            let book = ref('yao');
            let title = ref('首页');
            provide('book',book)
            provide('title',title)
        }

    }
</script>
