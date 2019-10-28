<template>
  <div class="clearfix">
    <img src="../assets/logo/01.png" alt />
    <b-img :src="icon1"></b-img>
    <b-img :src="icon2"></b-img>
    <b-img :src="icon3"></b-img>
    <b-img :src="icon4"></b-img>
    <b-img :src="icon5"></b-img>
    <b-img :src="icon6"></b-img>
    <b-img :src="icon7"></b-img>
    <b-img :src="icon8"></b-img>
  </div>
</template>

<script>
export default {
  date() {
    return {
      icon1: require("../assets/logo/01.png"),
      icon2: require("../assets/logo/02.png"),
      icon3: require("../assets/logo/03.png"),
      icon4: require("../assets/logo/04.png"),
      icon5: require("../assets/logo/05.png"),
      icon6: require("../assets/logo/06.png"),
      icon7: require("../assets/logo/07.png"),
      icon8: require("../assets/logo/08.png")
    };
  }
};
</script>

<style>
</style>