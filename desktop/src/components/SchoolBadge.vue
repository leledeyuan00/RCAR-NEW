<template>
<div class="text-center bg-white py-3">
  <div class="d-flex jc-around ai-center " style="max-width:800px; margin:auto">
    <div v-for="logo in logos" :key="logo">
      <img :src="logo" alt style="max-height:50px"/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        require("../../icon/01.png"),
        require("../../icon/02.png"),
        require("../../icon/03.png"),
        require("../../icon/04.png"),
        require("../../icon/05.png"),
        require("../../icon/06.png"),
        require("../../icon/07.png"),
        require("../../icon/08.jpg")
      ]
    };
  }
};
</script>

<style>
</style>