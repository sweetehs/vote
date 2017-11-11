<style lang="less">
	html,body,#app{
		height: 100%;
		overflow: hidden;
	}
	#app{
		display: flex;
		flex-direction: column;
		.main-wrapper{
			flex:1 ;
		}
		.bottom-wrapper{
			height: 1.4rem;
			line-height: 1.4rem;
		}
	}
</style>

<template>
	<div id="app">
		<div class="main-wrapper">
			<router-view/>
		</div>
		<div class="bottom-wrapper">
			<Bmenu></Bmenu>
		</div>
	</div>
</template>

<script>
	import Bmenu from './components/Bmenu.vue'
	export default {
		name: 'app',
		components: {
			'Bmenu': Bmenu
		}
	}
</script>
