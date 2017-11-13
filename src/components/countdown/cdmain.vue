<style lang="less">
    .cdmain-wrapper {
        display: flex;
        justify-content: center;
        .countdown-item {
            display: flex;
            >span {
                margin: 0 0.1rem;
                align-self: center;
            }
        }
    }
</style>

<template>
    <div class="cdmain-wrapper">
        <div class="countdown-item" v-for="(item,index) in carr" :key="index">
            <countdown :currentNum="item" :nextNum="narr[index]"></countdown>
            <span v-if="index === 0">天</span>
            <span v-else-if="index === 2"> 时</span>
            <span v-else-if="index === 4">分</span>
            <span v-else-if="index === 6">秒</span>
        </div>
    </div>
</template>

<script>
    import countdown from "./countdown.vue";
    export default {
        name: 'activity',
        data() {
            return {
                endDate: '2017-11-16 00:00:00',
                carr: [],
                narr: []
            }
        },
        methods: {
            getDate(time) {
                let hs = 1000
                let hm = 60 * hs
                let hh = 60 * hm
                let hd = 24 * hh
                let day = parseInt(time / hd).toString()
                let hour = parseInt((time - day * hd) / hh).toString()
                hour = hour < 10 ? '0' + hour : hour.toString()
                let minute = parseInt((time - day * hd - hour * hh) / hm).toString()
                minute = minute < 10 ? '0' + minute : minute.toString()
                let second = parseInt((time - day * hd - hour * hh - minute * hm) / hs).toString()
                second = second < 10 ? '0' + second : second.toString()
                let arr = day.split('').concat(hour.split(''), minute.split(''), second.split(''))
                return arr
            },
            setDate() {
                let ctime = new Date(this.endDate).getTime() - new Date().getTime()
                let ntime = ctime - 1000
                this.carr = this.getDate(ctime)
                this.narr = this.getDate(ntime)
            }
        },
        mounted() {
            setInterval(() => {
                this.setDate()
            }, 1000)
        },
        components: {
            'countdown': countdown
        }
    }
</script>
