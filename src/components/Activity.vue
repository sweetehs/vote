<style lang="less">
    .activity-wrapper {
        .head-img {
            height: 8rem;
            img {
                height: 100%;
            }
        }
        .vote-total {
            height: 1.6rem;
            line-height: 1.6rem;
            text-align: center;
            background: #eee;
            ul {
                height: 100%;
                display: flex;
                justify-content: center;
            }
            li {
                flex: 1;
                line-height: 1;
                display: flex;
                justify-content: center;
                flex-direction: column;
            }
            p {
                margin-top: 0.1rem;
            }
        }
    }
</style>

<template>
    <div class="activity-wrapper">
        <div class="activity-inner">
            <div class="head-img">
                <img src="../assets/imgtest/timg.jpeg">
            </div>
            <div class="vote-total">
                <ul>
                    <li>
                        <p>已报名</p>
                        <p>0</p>
                    </li>
                    <li>
                        <p>累积投票</p>
                        <p>0</p>
                    </li>
                    <li>
                        <p>访问量</p>
                        <p>0</p>
                    </li>
                </ul>
            </div>
            <div class="countdown">
                <cdmain></cdmain>
            </div>
        </div>
    </div>
</template>

<script>
    import cdmain from "./countdown/cdmain.vue";
    export default {
        name:'activity',
        components: {
            'cdmain': cdmain
        }
    }
</script>
