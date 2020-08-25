<template>
  <div>
    
      <Carousel />
      <div class>
        <video
          class="pt-4"
          src="./../../../src/videos/video_01.mp4"
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
        Important Dates
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
      <!-- <div class="msg text-red py-2 mx-13">
        <Announcement />
      </div> -->
      <div class="body_container home bg-white border-body">
      <h4 class="py-2 text-center border-top text-red">
        Important Announcement
        <i class="el-icon-warning el-icon--right"></i>
      </h4>
      <div class="msg bg-white px-2">
        <Announcement />
      </div>
      <h4 class="pt-2 text-center">
        New Announcement
      <i class="el-icon--right"></i>
      </h4>
      <div class="msg bg-white px-2">
        <NewAnnouncement />
      </div>
      <h4 class="pt-2 text-center">
        Schedule
      <i class="el-icon--right"></i>
      </h4>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7.5">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <div class="mx-5 text-center">
        <NewTimeTable />
      </div>
      <h4 class="py-2 text-center border-top">
        Welcome Message
        <i class="el-icon-magic-stick el-icon--right"></i>
      </h4>
      <div class="msg bg-white px-2">
        <Body />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Carousel from "./../components/Carousel.vue";
import Body from "./../components/Body.vue";
import TimeTable from "./../components/TimeTable.vue";
import NewAnnouncement from "./../components/NewAnnouncement.vue";
import NewTimeTable from "./../components/NewTimeTable.vue";
import Announcement from "./../components/Announcement.vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
export default {
  name: "home",
  components: {
    Carousel,
    Body,
    TimeTable,
    NewAnnouncement,
    NewTimeTable,
    Announcement,
  },
};
</script>

<style>
.home {
  max-width: 1366px;
  margin:auto;
}
.msg {
  max-width: 1200px;
  margin: auto;
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