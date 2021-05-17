<template>
   <div>
       <div>首页</div>
       <div>
           <button @click="btnFn">点击</button>
           <input type="text" @[intEve]="debouncedClick">
           <span>{{isYes}}</span>
           <span>{{isInt}}</span>
           <span>{{isCount}}</span>
           <span>{{firName}}{{lastName}}</span>
       </div>
       <div>
           <p>
               <span>问题：</span>
               <input type="text" v-model="question">
           </p>
           <p>
               <span>答案：</span>
               <span>{{answer}}</span>
           </p>
       </div>
       <!--条件判断-->
       <div>
           <!--v-else 必须紧跟在v-if后面，不然不生效-->
           <h2 v-if="awesome">v-if</h2>
           <h2 v-else>v-else</h2>
           <!--条件判断可以使用template包裹起来-->
           <template v-if="awesome">
               <h2>v-if</h2>
               <h2>part1</h2>
               <h2>part2</h2>
           </template>
       </div>
       <!--v-show切换dom元素 , 不可以使用template-->
       <div>
           <h3 v-show="awesome">v-show</h3>
       </div>
       <div>
           <!--v-for 循环数组-->
           <ul>
               <li v-if="awesome" v-for="(item,inx) in res" :key="inx">{{item}}</li>
           </ul>
           <!--v-for 循环对象-->
           <ul>
               <li v-for="(it,i,ii) in obj">{{ii}}.{{i}}:{{it}}</li>
           </ul>
           <!--v-for 循环对象数组-->
           <ul>
               <li v-for="(it,ix) in author">
                   <p>
                       <span>{{ix}}:</span>
                       <span v-if="typeof it == 'object'" v-for="(t,i) in it">&nbsp;{{t}}&nbsp;</span>
                       <span v-else>{{it}}</span>
                   </p>
               </li>
           </ul>
           <!--循环二维数组-->
           <ul>
               <li v-for="num in sets">
                   <span v-for="n in even(num)">{{n}}</span>
               </li>
           </ul>
       </div>
       <!--参数与原生事件-->
       <div>
           <button @click="goCharts('柱状图',100,$event)">点击事件</button>
           <button @click="one($event), two($event)">多个点击事件</button>
       </div>
       <!--表单-->
       <div>
           <div>
               <input id="intRadio1" type="radio" v-model="picked" value="1" name="rad">
               <label for="intRadio1">rad1</label>
               <input id="intRadio2" type="radio" v-model="picked" value="2" name="rad">
               <label for="intRadio2">rad2</label>
           </div>
           <div>
               <input type="text" v-model.lazy="intMsg">
               <input type="number"  v-model.number="intNum">
           </div>
       </div>
       <!-- 定时任务 -->
       <div class="cron">
           <el-popover v-model="cronPopover">
               <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略" style="width: 40% ;margin-left: -50%"></el-input>
               <cron @change="changeCron" @close="cronPopover=false" i18n="en"></cron>
           </el-popover>
       </div>
       <!-- 新特性 setup -->
       <div>
           <comps :user="fullName"></comps>
       </div>
   </div>
</template>

<script>
    import {cron} from 'vue-cron'
    import comps from '../components/Comps'
    export default {
        name: "home",
        components: { cron },
        data(){
            return{
                intEve:'input',
                debouncedClick:null,
                deGetAnswer:null,
                author:{
                    name:'lumy',
                    books:['book1', 'book2','book3']
                },
                count:10,
                firName:"芬奇",
                lastName:'里瑟',
                question:'',
                answer:'这里将展示问题的答案',
                awesome:true,
                res:['apple','pear','bananer'],
                obj:{
                    name:'lumy',
                    age:18,
                    fav:'read',
                    like:'apple'
                },
                sets:[[1,2,3,4,5],[6,7,8,9,10]],
                picked:'',
                intMsg:'sss',
                intNum:0,
                cronPopover:false,
                cron:''
            }
        },
        //计算属性
        computed:{

            isYes(){
                return this.author.books.length > 2 ? 'yes' : 'no'
            },
            isInt(){
                return this.intEve == 'input'?'是' : '否'
            },
            isCount(){
                return this.count > 9 ? '大于9':'小于9'
            },
            fullName:{
                get(){
                    return this.firName + ' ' + this.lastName
                },
                //赋值
                set(newVal){
                    const newName = newVal.split(' ');//字符串分割
                    this.firName = newName[0];
                    this.lastName = newName[newName.length-1];
                }
            }
        },
        created(){
            this.debouncedClick = _.debounce(this.intFn,500);//绑定防抖节流 ，在组件中使用时最好采用这种方式
            this.deGetAnswer =  _.debounce(this.getAnswer,500);//绑定防抖节流 ，在组件中使用时最好采用这种方式
        },
        unmounted(){
            this.debouncedClick.cancel();//解绑防抖节流
            this.deGetAnswer.cancel();//解绑防抖节流
        },
        methods:{
            btnFn(){
                this.awesome = this.awesome == true ? false : true;
            },
            intFn(){
                this.count = 5;
                this.fullName = '达 芬奇';
                console.log(this.intEve,'触发了点击事件')
            },
            getAnswer(){
                this.answer = '想想看';

            },
            even(num){
                return num.filter(n => n > 4 && n < 8)
            },
            goCharts(msg,num,event){
                console.log(msg,num)
                if (event){
                    console.log(event)
                }
            },
            one(event){
                console.log(this.intNum)
            },
            two(event){
                console.log(this.intMsg)
            },
            changeCron(val){
                this.cron=val
            },
        },
        //响应数据变化
        watch:{
            question(newQues,oldQues) {
                if (newQues.length > 0) {
                    this.deGetAnswer();
                }
            }
        }
    }
</script>

<style scoped>

</style>