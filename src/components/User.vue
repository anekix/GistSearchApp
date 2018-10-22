<template>
	<div>
		<div class="user__wrapper">
			<img 
				:src="userAvatarUrl"
				class="user__avatar" 
			/>
			<a :href="userForkLink" target="_blank">
				<div> {{userName}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'User',
		props:[ 'userAvatarUrl','userName','userForkLink']
	}

</script>

<style lang="stylus" scoped>
.user__avatar
	border-radius 50%
	width 46px
	height 46px
	display block
	margin 0 auto
a
	text-decoration none
	color blue
	font-weight bold
</style>