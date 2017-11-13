<style lang="less" scope>
    .waterfall-inner{
        display: flex;
        .left,.right{
            flex: 1;      
            flex-grow: 1;                     
        }
        li{
             padding: 0.1rem;   
             box-shadow: 0 0 0.5rem #888;
             .img{
                 img{
                     width: 100%;
                 }
             }
        }
    }
</style>
<template>
    <div class="waterfall-wrapper">
        <div class="waterfall-inner">
            <ul class="left">
                <li v-for="(item,index) in leftArr.arr" :key="index">
                    <div class="img">
                        <img :src="item.img">
                    </div>
                    <div class="info"></div>
                </li>
            </ul>
            <ul class="right">
                <li v-for="(item,index) in rightArr.arr" :key="index">
                    <div class="img">
                        <img :src="item.img">
                    </div>
                    <div class="info"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>    
    export default{
        data(){
            debugger
            let arr = []
            for(let i = 0;i < 20; i++){
                arr.push({
                    img:'/static/'+parseInt(Math.random()*10%4)+'.jpg'
                })                
            }
            debugger;
            return {
                arr:arr,
                leftArr:{
                    height:0,
                    arr:[]
                },
                rightArr:{
                    height:0,
                    arr:[]
                }
            }
        },
        methods:{
            setArr(){  
                var that = this                         
                this.arr.map((_d)=>{
                    const img = new Image()
                    img.src = _d.img                    
                    img.onload = (_i)=>{                                     
                        if(that.leftArr.height >= that.rightArr.height){
                            that.rightArr.height += _i.target.height
                            that.rightArr.arr.push({
                                img:_d.img
                            })                           
                        }else{
                            that.leftArr.height += _i.target.height
                            that.leftArr.arr.push({
                                img:_d.img
                            })
                        }                        
                    }
                })
            }
        },
        mounted(){
            debugger
            this.setArr();
        },
        components:{
           
        }
    }
</script>

