<template>
  <div class>
    <swiper>
      <!--
      <swiper-slide>
        <video
          class="w-100"
          src="./../../../src/videos/video_01.mp4"
          autoplay="none"
          loop="loop"
          controls="controls"
        >请更新你的浏览器到最新版本</video>
      </swiper-slide>
      -->
      <swiper-slide>
        <img
          class="w-100"
          height="auto"
          src="./../../../src/images/01-m.png"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          height="auto"
          src="./../../../src/images/02-m.png"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          height="auto"
          src="./../../../src/images/03-m.png"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          height="auto"
          src="./../../../src/images/04-m.png"
          alt
        />
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
    swiperSlide,
  },
};
</script>

<style></style>
