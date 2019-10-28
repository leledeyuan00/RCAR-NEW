<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in item_list" :key="item">
        <img :src="item.src"  alt=""/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"block",
    data(){
        return{
            item_list:[{src:require("./../../pict/01.jpg")
            },
            {src:require("./../../pict/02.jpg")
            },
            {src:require("./../../pict/03.jpg")
            },
            {src:require("./../../pict/04.jpg")
            }
            ],
           /*  bannerHeight:1000,
            screenWidth:0, */
        }
    },
})
</script>

<style>
 /*  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } */

/*   .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>