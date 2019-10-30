<template>
<div class="text-center bg-white py-3">
  <div class="d-flex jc-around ai-center " style="max-width:800px; margin:auto ;">
    <div v-for="logo in logos" :key="logo">
      <img :src="logo" alt style="max-height:30px"/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        require("./../assets/logo/01.png"),
        require("./../assets/logo/02.png"),
        require("./../assets/logo/03.png"),
        require("./../assets/logo/04.png"),
        require("./../assets/logo/05.png"),
        require("./../assets/logo/06.png"),
        require("./../assets/logo/07.png"),
        require("./../assets/logo/08.jpg")
      ]
    };
  }
};
</script>

<style>
</style>