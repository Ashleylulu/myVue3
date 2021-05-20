<template>
    <div>
        <injection></injection>
        <div>
            <ul>
                <li v-for="item in book">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {ref,toRefs,computed,watch,onMounted , reactive , inject, h} from 'vue' // 实现带ref的响应式变量
import injection from '../components/Injection'
export default {
    components:{injection},
    setup(){
        let book = inject('book');
        let state = reactive({count:0})
        const increat = () => {
            state.count++
            console.log(state)
        }
        return {
            book
        }
    },
    render(){
        return h('div')
    }

}
</script>
<style scoped>

</style>
