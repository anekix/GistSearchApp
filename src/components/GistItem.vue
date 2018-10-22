<template>
    <div>
        <div class='gist__item'>
        <a :href="gistData.gistUrl" target="_blank">

        <div class="gits__url">{{ gistData.gistUrl }}</div>
        </a>
        <div class="tag__wrapper files">
            <Tag v-for="file in gistData.gistMeta.files" :tag-value="file" class="tag filenames" />
        </div>

        <div class="tag__wrapper">
            <Tag v-for="tag in gistData.gistMeta.tags" :tag-value="tag" class="tag filetypes" />

        </div>
        <div class="avatar__container">
            <User
                class="avatar__item"
                v-for="item in  forks"
                :user-avatar-url="item.avatarUrl" 
                :user-name="item.name"
                :user-fork-link="item.forkUrl"
            />
        </div>
        </div>
    
    </div>
</template>

<script>

import User from '@/components/User'
import Tag from '@/components/Tag'
export default {
  
  name: 'GistItem',
  props:['gistData'],
  components:{
    User,
    Tag
  },
computed: {
    forks() {
        if (this.gistData.forkInfo.length > 1){
            this.gistData.forkInfo.sort((a,b) => new Date(new Date(b.forkCreatedAt).getTime()-a.forkCreatedAt).getTime())
        }
        return this.gistData.forkInfo.slice(0,3)
  }     
}


}

</script>

<style scoped lang="stylus" >

.avatar__container
    padding-top 10px
    display flex
    flex-direction row
    justify-content center

.avatar__item
    margin-right 8px

.tag
    margin-right 4px
    margin-top 2px
    display inline-block

.tag__wrapper
    margin-top 10px
    margin-bottom 10px

.gits__url
    color grey

.gist__item
    padding-top 20px
    padding-bottom 20px
    padding-left 20px
    padding-right 20px
    margin-bottom 20px
    width 400px
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover
        border-left 3px solid grey
</style>
