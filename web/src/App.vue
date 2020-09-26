<template>
  <div id="app">
    <Navigator/>
    <!-- <div
      class="text-white fs-xl bg-info text-center pt-1"
      style="margin:auto; height:25px"
    >August 2-6, 2020, Asahikawa, Japan</div> -->
    <router-view />
    <div class="SchoolBadge">
      <SchoolBadge />
    </div>
  </div>
</template>

<script>
import SchoolBadge from "./components/SchoolBadge.vue";
import Navigator from "./components/Navigator.vue";
export default {
  components: {
    Navigator,
    SchoolBadge
  }
};
</script>

<style>

</style>
