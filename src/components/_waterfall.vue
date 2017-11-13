<style lang="less" scope>
    .waterfall-inner {
        display: flex;
        .left,
        .right {
            flex: 1;
            flex-grow: 1;
        }
        li {
            padding: 0.1rem;
            box-shadow: 0 0 0.2rem #888;
            margin: 0.1rem;
            .img {
                img {
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
    export default {
        data() {
            let arr = []
            for (let i = 0; i < 20; i++) {
                arr.push({
                    img: '/static/' + parseInt(Math.random() * 10 % 4) + '.jpg'
                })
            }
            return {
                arr: arr,
                leftArr: {
                    height: 0,
                    arr: []
                },
                rightArr: {
                    height: 0,
                    arr: []
                }
            }
        },
        methods: {
            setArr() {
                let that = this
                let left = []
                let right = []
                this.arr.map((_d, index) => {
                    const img = new Image()
                    img.src = _d.img
                    img.onload = (_i) => {
                        if (that.leftArr.height >= that.rightArr.height) {
                            that.rightArr.height += _i.target.height
                            right.push({
                                img: _d.img,
                                index: index
                            })
                        } else {
                            that.leftArr.height += _i.target.height
                            left.push({
                                img: _d.img,
                                index: index
                            })
                        }
                        if (index == that.arr.length - 1) {
                            that.leftArr.arr = that.leftArr.arr.concat(left)
                            that.rightArr.arr = that.rightArr.arr.concat(right)
                            // Array.prototype.push.call(that.leftArr.arr, left)
                            // Array.prototype.push.call(that.rightArr.arr, right)
                        }
                    }
                })
            }
        },
        mounted() {
            this.setArr();
        },
        components: {

        }
    }
</script>

