<template>
  <div>
    <div class="Header bg-white px-5">
      <Head />
    </div>
    <Navigator />
    <router-view/>
  </div>
</template>

<script>
import Head from './../components/Head.vue'
import Navigator from './../components/Navigator.vue'
export default {
  name: "app",
  components: {
    Head,
    Navigator
  }
};
</script>

<style>

</style>