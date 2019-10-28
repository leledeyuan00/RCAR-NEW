<template>
  <div class>
    <swiper>
      <swiper-slide>
        <video
          class="w-100"
          src="../assets/videos/video_01.mp4"
          autoplay="none"
          loop="loop"
          controls="controls"
        >请更新你的浏览器到最新版本</video>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" height="auto" src="../assets/images/01-f.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" height="auto" src="../assets/images/02-f.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" height="auto" src="../assets/images/03-f.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" height="auto" src="../assets/images/04-f.png" alt />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "block",
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      video1 : require("../assets/videos/video_01.mp4")
    }
  }
};
</script>

<style>
</style>