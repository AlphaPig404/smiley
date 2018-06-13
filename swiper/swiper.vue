<template>
    <div class="sliders" @click="addSmiley">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
          <smiley :list="slide" :start="key*24"></smiley>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>

import { smiley } from '../smiley/smiley.js'
import Smiley from '../smiley/smiley.vue'

  export default {
    name: 'sliders',
    data() {
      return {
        swiperSlides: [],
        swiperOption: {
          autoplay: 0,
          setWrapperSize :true,
          pagination: {
            el: '.swiper-pagination'
          },
          paginationClickable: true,
          mousewheelControl : true,
          observeParents:true,
          loop: false
        },
      }
    },
    components:{
        Smiley
    },
    created() {
        this.initData()
    },
    methods:{
      initData(){
        const arr = this.arrChunk(smiley, 24)
       
        this.swiperSlides = arr
      },
      arrChunk(array, size) {
        size = Math.max(size, 0)
        const length = array == null ? 0 : array.length
        if (!length || size < 1) {
            return []
        }
        
        let index = 0
        let resIndex = 0
        const result = new Array(Math.ceil(length / size))
        
        while (index < length) {
            result[resIndex++] = array.slice(index, (index += size))
        }
        return result
      },
      addSmiley(e){
        //   console.log(e)
        const tar = this.getNode(e.target,'LI')

        if(tar){
            const {title} = tar.dataset
            this.$emit('change', title)
        }
      },
      getNode: function(node,name){
        if (node.nodeName === name) {
            return node
        }else if(node.nodeName === 'BODY'){
            return false
        }else{
            return this.getNode(node.parentNode,name)
        }
      },
    }
  }
</script>

<style scoped>
    .swiper-pagination{
       bottom: -3px !important;
    }
    .swiper-pagination-bullet-active{
        background: #999 !important
    }
</style>
