<template>
    <div>
        <button>点击按钮</button>
    </div>
</template>
<script>
import {ref} from 'vue' // 实现带ref的响应式变量
export default {
    props:{
        user:{
            type:String,
            required:true
        }
    },
    setup(props){
        console.log(props)
        let res = ref([]);
        const getUserRes = () => {
            console.log('1')
        }
        return {
            res,
            getUserRes
        } //这里返回的任何内容都可以用于组件的其余部分
    },
    //组件的"其余部分"
    data(){
        return {

        }
    },
    mounted () {
        this.getUserRes()
    }
}
</script>
<style scoped>

</style>