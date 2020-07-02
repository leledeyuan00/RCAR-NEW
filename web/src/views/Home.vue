<template>
  <div class="home">
    <Carousel />
    <Table />
     <div class="head-bar imp">
       Important Announcement
      <i class="el-icon-warning pl-2 imp"></i>
    </div>
    <div class="fs-xl bg-light px-2 imp">
      <p>Since the current situation of COVID-19, the program committee has determined to postpone the conference. The registration site will be opened after the new schedule is determined. Please continue to follow the update in this website. 
        </p><p>
        Program committee of RCAR 2020
        </p><p>
        July.1st 
        </p>
    </div>
    <Welcom />
    <Router-link tag="div" to="./history" class="head-bar text-main-3" style="text-decoration:underline">Clik Here to History of RCAR</Router-link>
    <!-- <img class="w-100" src="../assets/logo/committee_logo.png" alt /> -->
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
    Welcom,
  }
};
</script>

<style lang="scss">

.imp {
  color: red;
}

</style>