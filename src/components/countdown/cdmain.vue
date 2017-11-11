<template>
    <div class="cdmain-wrapper">
        <countdown></countdown>
    </div>
</template>

<script>
    import countdown from "./countdown.vue";
    export default {
        name: 'activity',
        components: {
            'countdown': countdown
        }
    }
</script>
