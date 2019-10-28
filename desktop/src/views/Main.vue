<template>
  <div>
    <div class="Header"><Head/></div>   
    <Navigator/>
    <el-container class="body_container">
        <Carousel/>
        <video class="pt-4" src="./../../pict/video_01.mp4" autoplay="none" loop="loop" controls="controls">
          请更新你的浏览器到最新版本
        </video>
        <p style="text-align:left">RCAR 2020 Welcome. Part of video comes from youtube . Thanks to the author.</p>
        <h4 class="pt-2">Important Data<i class="el-icon-date el-icon--right"></i></h4>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="7.5"><div class="grid-content bg-purple"><TimeTable/></div></el-col>
        </el-row>
        <h4 class="pt-2">Welcome Message<i class="el-icon-magic-stick el-icon--right"></i></h4>
        <el-main class="pt-4">
          <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="24"><div><Body/></div></el-col>
          </el-row>
        </el-main>
        <el-footer>
          <img src="./../../icon/committee_logo2.png"  alt="" /></el-footer>
    </el-container>

</div>
</template>

<script>
import Head from './../components/Head.vue'
import Carousel from './../components/Carousel.vue'
import Navigator from './../components/Navigator.vue'
import Body from './../components/Body.vue'
import TimeTable from './../components/TimeTable.vue'
export default {
  name: 'app',
  components: {
    Head,
    Navigator,   
    Carousel, 
    Body,
    TimeTable,
  }
}
</script>

<style>
  .Header{
      width:80%;
      margin-left: 10%;
  }
  .body_container{
    width:92%;
    margin:auto;
  }

  /* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center; 
     margin-left: 10%;
    width:80%;
  } */
    
   .el-main {
    text-align:justify;
  }
</style>