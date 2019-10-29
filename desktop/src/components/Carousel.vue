<template>
  <div>
    <b-carousel
      id="carousel"
      style="text-shadow: 0px 0px 2px #000"
      controls
      fade
      indicators
      img-width="1280"
      img-height="720"
    >
      <div v-for="img in img_list" :key="img">
        <b-carousel-slide :caption="img.msg" :img-src="img.src"></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>
<script>
import Vue from "vue";
import { CarouselPlugin } from "bootstrap-vue";
Vue.use(CarouselPlugin);
export default {
  data() {
    return {
      img_list: [
        { src: require("./../../pict/01.png"),
        msg:""},
        { src: require("./../../pict/02.png"),
        msg:"" },
        { src: require("./../../pict/03.png"),
        msg:"" },
        { src: require("./../../pict/04.png"),
        msg:"" }
      ]
    };
  }
};
</script>

<style>
</style>