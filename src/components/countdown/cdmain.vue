<style lang="less">
    .cdmain-wrapper {
        display: flex;
    }
</style>

<template>
    <div class="cdmain-wrapper">
        <countdown :num="s6" :end="end"></countdown>
    </div>
</template>

<script>
    import countdown from "./countdown.vue";
    export default {
        name: 'activity',
        data() {
            return {
                time: '',
                end: false,
                s0: 0,
                s1: 0,
                s2: 0,
                s3: 0,
                s4: 0,
                s5: 0,
                s6: 5
            }
        },
        methods: {
            setDate() {
                // debugger
                // console.log(this.s6)
                if (this.s6 === 0) {
                    this.s6 = 9
                } else {
                    this.s6 = this.s6 - 1
                }
            }
        },
        mounted() {
            let that = this
            that.setDate()
            that.time = setInterval(() => {
                that.setDate();
            }, 1000)
        },
        components: {
            'countdown': countdown
        }
    }
</script>
