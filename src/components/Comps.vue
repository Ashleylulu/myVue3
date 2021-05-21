<template>
    <div>
        <injection></injection>
        <div>
            {{book}}
        </div>
    </div>
</template>
<script>
import {inject} from 'vue' // 实现带ref的响应式变量
import injection from '../components/Injection'
export default {
    components:{injection},
    setup(){
        let book = inject('book');
        return {
            book
        }
    },
}
</script>
<style scoped>

</style>
