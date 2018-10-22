<template>
	<span class="tag">
		{{ tagValue }}
	</span>
</template>

<script>
	export default{
		name: 'Tag',
		props:['tagValue']

	}
</script>

<style lang="stylus" scoped>
	
.tag
	color white	
	padding-top 2px
	padding-bottom 2px
	padding-left 9px
	padding-right 9px
	border-radius 10px
	&.filenames
		background-color blue
	&.filetypes
		background-color grey

</style>