
<template>
    <div class="countdown-wrapper">
        <div ref="animate" class="count down" :class="animateClass">
            <span class="current top ">{{currentNum}}</span>
            <span class="next top ">{{nextNum}}</span>
            <span class="current bottom ">{{currentNum}}</span>
            <span class="next bottom ">{{nextNum}}</span>
        </div>
    </div>
</template>

<script>
    import "./countdown.css"
    export default {
        data() {
            return {
                currentNum: 0,
                nextNum: 0,
                animateClass: ''
            }
        },
        props:['num','end'],
        watch:{
            num(){
                if(!this.end){
                    this.setNum()
                    this.animate()
                }
            },
        },
        methods: {
            setNum(){
                this.nextNum = this.num
                this.currentNum = this.nextNum + 1
                if(this.currentNum == 10){
                    this.currentNum = 0
                }
            },
            animate() {
                setTimeout(() => {
                    this.animateClass = "changing"
                }, 100  )
                setTimeout(() => {
                    this.animateClass = "changed"
                }, 800)
                setTimeout(() => {
                    this.animateClass = ""
                }, 1000)
            }
        }
    }
</script>