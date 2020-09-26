<template>
  <div class="body-main border-body bg-white ql-align-articles">
    <h2 span style="color:rgb(0,102,204)">
      Program at a Glance
    </h2>
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
</style>
