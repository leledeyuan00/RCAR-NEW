<template>
  <div class="home">
    <Carousel />
    <Table />
    <Welcom />
    <Router-link tag="div" to="./history" class="head-bar text-main-3" style="text-decoration:underline">Clik Here to History of RCAR</Router-link>
    <img class="w-100" src="../assets/logo/committee_logo.png" alt />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Table from "@/components/Table.vue";
import Welcom from "@/components/Welcom_msg.vue";
export default {
  name: "home",
  components: {
    Carousel,
    Table,
    Welcom
  }
};
</script>
