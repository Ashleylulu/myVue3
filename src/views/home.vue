<template>
    <div>
        <comps v-styc="co"></comps>
        <input type="range" min="0" max="300" ref="int" v-model="pinval">
        <div ref="box" v-pin:[dir] = 'pinval'>我在移动</div>
        <div v-sty="{color:'red',text:'hello'}"></div>
    </div>
</template>
<script>
    import comps from '../components/Comps'
    import {toRefs,toRef,provide,reactive,ref,onMounted,watch} from 'vue'
    const homeMixin = {
        data(){
            return {
                box:'box',
                dir:'right',
                pinval:200,
                co:"pink"
            }
        }
    }
    export default {
        components:{comps},
        directives:{
           focus:{
               mounted(el){
                   el.focus()
               }
           },
            //函数表达式形式
            pin(el,binding) {
                el.style.position = 'fixed';
                let dec = binding.arg || 'top';
                el.style[dec] = binding.value + 'px'
            },
            //对象字面量
            sty(el,binding) {
               let val = binding.value;
               el.style.color = val.color;
               el.innerText = val.text;
            },
            //在组件中使用
            styc(el,binding) {
               el.style.color = binding.value;
            }
            //在组件中使用

        },
        setup(props,context){
            provide('title',ref('首页'));
            provide('book',reactive([
                'kuangrenriji','nahan'
            ]))

            let box = ref(null);
            let int = ref('123');
            onMounted(() => {
                console.log(box.value)//<div>xinqingnian</div>
                console.log(int.value)//<input type="text">
            })
            return {
                box,
                int
            }
        },
        mixins:[homeMixin],
        created(){
        }
    }
</script>
