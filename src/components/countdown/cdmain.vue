<style lang="less">
    .cdmain-wrapper {
        display: flex;
    }
</style>

<template>
    <div class="cdmain-wrapper">
        <countdown :nextNum="s5n" :currentNum="s5c"></countdown>
        <countdown :nextNum="s6n" :currentNum="s6c"></countdown>
    </div>
</template>

<script>
    import countdown from "./countdown.vue";
    export default {
        name: 'activity',
        data() {
            return {
                s0: 0,
                s1: 0,
                s2: 0,
                s3: 0,
                s4: 0,
                s5c: 5,
                s5n: 4,
                s6c: 9,
                s6n: 8
            }
        },
        methods: {
            setDate() {
                console.log(this.s6c + '' + this.s6n)
                if (this.s6c == 0) {
                    this.s6c = 9
                } else {
                    this.s6c -= 1
                }
                if (this.s6n == 0) {
                    this.s6n = 9
                } else {
                    this.s6n -= 1
                }
            }
        },
        mounted() {
            this.setDate()
            setInterval(() => {
                this.setDate();
            }, 1000)
        },
        components: {
            'countdown': countdown
        }
    }
</script>
