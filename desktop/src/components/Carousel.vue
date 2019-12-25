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
      <div v-for="(img,i) in img_list" :key="i">
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
        { src: require("./../../../src/images/01-f.png"),
        msg:""},
        { src: require("./../../../src/images/02-f.png"),
        msg:"" },
        { src: require("./../../../src/images/03-f.png"),
        msg:"" },
        { src: require("./../../../src/images/04-f.png"),
        msg:"" }
      ]
    };
  }
};
</script>

<style>
</style>