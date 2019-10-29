<template>
  <div>
    <div class="body_container home bg-white">
      <Carousel />
      <div class>
        <video
          class="pt-4"
          src="./../../pict/video_01.mp4"
          autoplay="none"
          loop="loop"
          controls="controls"
          width="100%"
        >请更新你的浏览器到最新版本</video>
        <div
          class="text-grey py-1 border-bottom"
        >RCAR 2020 Welcome. Part of video comes from youtube . Thanks to the author.</div>
      </div>
      <h4 class="pt-2 text-center">
        Important Data
        <i class="el-icon-date el-icon--right"></i>
      </h4>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7.5">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <div class="mx-5 text-center">
        <TimeTable />
      </div>
      <h4 class="pt-2 text-center border-top">
        Welcome Message
        <i class="el-icon-magic-stick el-icon--right"></i>
      </h4>
      <div class="msg bg-white">
        <Body />
      </div>
      <div class="text-center bg-white">
        <b-img :src="logo_url" fluid-grow alt="Fluid-grow image"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Carousel from "./../components/Carousel.vue";
import Body from "./../components/Body.vue";
import TimeTable from "./../components/TimeTable.vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
export default {
  name: "app",
  components: {
    Carousel,
    Body,
    TimeTable
  },
  data() {
    return {
      logo_url: require("./../../icon/committee_logo2.png")
    };
  }
};
</script>

<style>
.home {
  margin-left: 5rem;
  margin-right: 5rem;
}
.msg {
  padding-left: 10rem;
  padding-right: 10rem;
}

/* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center; 
     margin-left: 10%;
    width:80%;
  } */

.el-main {
  text-align: justify;
}
</style>