<template>
  <div class="home">
    <Carousel />
    <Table />
    <div class="head-bar">
      <router-link tag="div" :to="'./Program'"
        ><div>
          Online Program
          <i class="el-icon-arrow-right"></i></div
      ></router-link>
    </div>
    <div class="pt-3 pb-3 text-center">
      <router-link tag="span" :to="'./Plenary'"
        ><span class="text-center fs-xl fw-l pt-2 pb-2 border-right">
          Plenary Speaker <i class="el-icon-arrow-right"></i></span
      ></router-link>
      <router-link tag="span" :to="'./Keynote'"
        ><span class="text-center fs-xl fw-l pt-2 pb-2 border-left">
          Keynote Speaker <i class="el-icon-arrow-right"></i></span
      ></router-link>
    </div>
    <div class="head-bar imp">
      Important Announcement
      <i class="el-icon-warning pl-2 imp"></i>
    </div>
    <div class="fs-xl bg-light px-2">
      <div class="border-bottom">
        <p>
          The registration has started on
          <font color="#FF0000">
            Sep. 18
          </font>
          . It will be closed on Sept. 25. The online conference will be held on
          <font color="#FF0000"> Sep. 28,29 </font>.
        </p>
        <div class="text-right">
          <pp>Program committee of RCAR 2020</pp>
          <p>Sep. 18, 2020</p>
        </div>
      </div>
      <div class="border-bottom">
        <p>
          Due to current situation of COVID-2019, the committee of RCAR 2020 has
          determined to change the conference to be a virtual one. The committee
          is now requiring authors to submit a presentation video for use in the
          coming online conference in the case when no authors of the paper can
          make a real-time presentation. The details on how to prepare for and
          upload the presentation video can be found in final submission page in
          the conference site. The registration site and the schedule of the
          online conference will be announced soon.
        </p>
        <div class="text-right">
          <pp>Program committee of RCAR 2020</pp>
          <p>Aug. 25, 2020</p>
        </div>
      </div>
      <p>
        Since the current situation of COVID-19, the program committee has
        determined to postpone the conference. The registration site will be
        opened after the new schedule is determined. Please continue to follow
        the update in this website.
      </p>
      <div class="text-right">
        <p>
          Program committee of RCAR 2020
        </p>
        <p>
          July.1st
        </p>
      </div>
    </div>
    <Welcom />
    <Router-link
      tag="div"
      to="./history"
      class="head-bar text-main-3"
      style="text-decoration:underline"
      >Clik Here to History of RCAR</Router-link
    >
    <!-- <img class="w-100" src="../assets/logo/committee_logo.png" alt /> -->
  </div>
</template>

<script>
import Vue from "vue";
import Carousel from "@/components/Carousel.vue";
import Table from "@/components/Table.vue";
import Welcom from "@/components/Welcom_msg.vue";
import { BIcon } from "bootstrap-vue";
Vue.component("b-icon", BIcon);
export default {
  name: "home",
  components: {
    Carousel,
    Table,
    Welcom,
  },
};
</script>

<style lang="scss">
.imp {
  color: red;
}
</style>
