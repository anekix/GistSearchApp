<template>
  <div class="home">
      <div class="main_wrapper">
       <div class="gist__wrapper">
        <Search dispatchMethod='fetchUserGists' v-on:childToParent="onDataRecieved"/>
        <GistItem v-for="item in gistData" :gist-data="item" class="gist__infobox" />
       </div>

     </div>
  </div>
</template>

<script>

// @ is an alias to /src
import Search from '@/components/Search';
import GistItem from '@/components/GistItem'
import {getGistForks} from '@/services/forks'
import {fileTypeToTag} from '@/utils/main'


export default {
  name: 'home',
  components: {
    Search,
    GistItem,
  },
  methods:{
    /**
     * Takes filesObj returned by github api & return filename & filetypes
     * @param  {Object} filesObj returnde by the github api
     * @return {Object} an object containing filename & filetypes 
     *
     */
    getTagsAndFileName(filesObj) {
      const fileNames = Object.keys(filesObj);
      let tags = []
      for (let i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i]
        tags.push(filesObj[fileName]['type'])
      }
      tags = fileTypeToTag(tags)
      return {
        tags: tags,
        files: fileNames
      }
    },

    /**
     * Called when data is emitted from the child search component,
     * sets the value of this.gistData (which is required to render the gists)
     * @param  {any} object returned by the emitted by the child component
     * @return {undefined} 
     *
     */
    onDataRecieved(value){
      this.gistData = []
      var userGists = value
      userGists.forEach(el => {

        getGistForks(el.id).then(response => {
            let temp = []
            response.data.forEach(fork => {
              temp.push({
                  avatarUrl:fork.owner.avatar_url,
                  forkUrl:fork.html_url,
                  name:fork.owner.login,
                  forkCreatedAt: new Date(fork.created_at)
              })
            })

            let metaInfo = this.getTagsAndFileName(el.files)
            let gistUrl = el.html_url

            this.gistData.push({
              gistMeta:metaInfo,
              gistUrl:gistUrl,
              forkInfo:temp
            })
            })
      
      })
    }
  },

  data: function(){
    return {
      gistData:[],
}
},

}
</script>
<style lang="stylus" scoped>

.gist__wrapper
  display flex
  flex-direction column
  align-items: center
  justify-content: center

</style>
