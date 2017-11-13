<style>
    .pirtures-inner{
        padding: 0.05rem;
    }
</style>
<template>
    <div class="pictures-wrapper">
        <div class="pirtures-inner">
            <Waterfall></Waterfall>
        </div>
    </div>
</template>
<script>
    import Waterfall from './_waterfall.vue'
    export default{
        components:{
            'Waterfall':Waterfall
        }
    }
</script>

