<style lang="less">
	.menu-wrapper {
		width: 100%;
		font-size: 0.32rem;
		text-align: center;		
		box-shadow: 0 0 0.2rem #ccc;					
		ul {
			display: flex;
			
		}
		li {
			flex: 1;
			box-sizing: border-box;
			&.active{
				background: #acb;
				color: #eee;
			}						
		}
	}
</style>

<template>
	<div class="menu-wrapper">
		<div class="menu-inner">
			<ul>
				<li class="active">活动</li>
				<li>风采</li>
				<li>规则</li>
				<li>奖品</li>
				<li>排行</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default {};
</script>


