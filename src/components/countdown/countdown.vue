
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
                animateClass: ''
            }
        },
        props:['currentNum','nextNum'],
        watch:{
            nextNum(){
                this.animate()
            }
        },
        methods: {
            animate() {
                setTimeout(() => {
                    this.animateClass = "changing"
                }, 50)
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