<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    import {inject} from 'vue'
    export default {
        name: "Injection.vue",
        setup(){
            let title = inject('title');
            return {
                title
            }
        }
    }
</script>

<style scoped>

</style>
