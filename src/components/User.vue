<template>
	<div>
		<div class="user__wrapper">
			<img 
				:src="userAvatarUrl"
				@load="loaded"
				class="user__avatar" 
				:class="{ isLoading: isLoading }"
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
		props:[ 'userAvatarUrl','userName','userForkLink'],
		data(){
			return{
				isLoading:true
			}
		},
		methods:{
			loaded(){
				this.isLoading = false
			}
		}
	}

</script>

<style lang="stylus" scoped>
.user__avatar
	border-radius 50%
	width 46px
	height 46px
	display block
	margin 0 auto
	border 1px solid grey
a
	text-decoration none
	color #261919
	font-weight bold

.isLoading
	background-color grey

</style>