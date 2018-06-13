<template>
    <div class="smiley">
       <ul class="emotions_wrapper">
           <li class="emotions_item" :data-name="`icon_smiley_${index}`" :data-title="item" v-for="(item, index) in list" :key="index">
               <span class="emotions_item_wrapper">
                   <i class="icon_emotion_sprite icon_emotion_smiley" :style="`background-position:0 ${(index+start)*-20}px`"></i>
               </span>
           </li>
       </ul>
    </div>
</template>

<script>

import { smiley } from './smiley.js'

export default {
  name: 'smiley',
  data(){
      return{
        // list: smiley
      }
  },
  props:['list','start'],
  methods: {
      parseSmiley(text){
          const reg = /\[.+?\]/g; 
          const _text = text.replace(reg, function(key){
              const index = smiley.indexOf(key)
              if( index<0 ){ return key }
              return `<i class="icon_emotion_sprite" style="background-position:0 ${index*-20}px"></i>`
          })
          return _text
      }
  }
}
</script>

<style scoped>
    .emotions_wrapper{
        overflow: hidden;
    }
    .emotions_item{
       float: left;
       width: 12.5%;
       font-size: 0;
       text-align: center;
    }
    .emotions_item_wrapper{
       position: relative;
       display: inline-block;
       width: 100%;
       padding-top: 100%;
    }
    .icon_emotion_smiley{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -10px;
        margin-top: -10px;
    }
</style>


