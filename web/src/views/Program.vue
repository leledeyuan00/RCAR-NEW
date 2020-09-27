<template>
  <div class="history border-body">
    <div class="head-bar d-flex ai-center">
      <router-link tag="div" :to="'./'">
        <i class="el-icon-arrow-left fs-xxxl"></i>
      </router-link>
      <span class="flex-1 pr-1">Program at a Glance</span>
    </div>
    <h4 style="margin-top:10px; margin-bottom:10px;">
      The way for live presentation:
    </h4>
    <h5 style="ai-center">
      The authors of the registered papers should make a live presentation in the time slot of the program. The authors can also choose to play the pre-recorded presentation video. The video files submitted to the conference site will be used as the backup. The duration of the presentation is 
      <font color="#FF0000">ten minutes</font>
      . After the presentation, we will arrange
      <font color="#FF0000">three minutes for Q&A</font>
      . The presenters have to try to answer the questions from the audience.
    </h5>
    <img src="./../../../src/images/Program.png" class="card-im-left" width="100%">
      <div class="fs-xxl pt-2 pb-2 border-bottom">
        <font>
             <a href="http://www.ieee-rcar.com/uploads/IEEE_RCAR_2020_Technical_Sessions.pdf" target="_blank" style="background-color:transparent;color: rgb(250,0,0);">Click here to download the Program</a>
        </font>
      </div>
      <div class="fs-xxxl pt-2" span style="color:rgb(0,102,204)">
        Detailed Technical Program
      </div>
      <br>
      <img src="./../../../src/images/Detailed.png" width="100%"> 
      <div class="fs-xxl pt-2 border-bottom">
        <font>
             <a href="http://www.ieee-rcar.com/uploads/IEEE_RCAR_2020_Detailed_Technical_Program.pdf" target="_blank" style="background-color:transparent;color: rgb(250,0,0);">Click here to download the Detailed Technical Program in PDF</a>
        </font>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
export default {
  name: "home",
};
</script>

<style>
.home {
  max-width: 1366px;
  margin: auto;
}
.msg {
  max-width: 1200px;
  margin: auto;
}

/* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center; 
     margin-left: 10%;
    width:80%;
  } */

.el-main {
  text-align: justify;
}
.history{
  max-width: 1366px;
  margin: auto;
  background-color:white;
}
</style>
