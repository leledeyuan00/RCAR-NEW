<template>
  <div class="body-main border-body bg-white ql-align-articles px-3">
      <h1 span style="color:rgb(0,102,204)">
        Program at a Glance
      </h1>
      <br>
      <h3><strong>The way for live presentation:</strong></h3>
      <h5>
      <p>The authors of the registered papers should make a live presentation in the time slot of the program. The authors can also choose to play the pre-recorded presentation video. The video files submitted to the conference site will be used as the backup. The duration of the presentation is 
        <font color="#FF0000">ten minutes</font>
        . After the presentation, we will arrange 
        <font color="#FF0000">three minutes for Q&A</font>
        . The presenters have to try to answer the questions from the audience.
        <a href="https://intl.cloud.tencent.com/product/tvm?lang=en&pg=" style="background-color:transparent;color: rgb(250,0,0);">Tecent VooV Meeting is needed, click here to download.</a></p>
      </h5>
      <h3><strong>Notice: The time in the following table means time in GMT+8 （Beijing, HongKong Time Zone）</strong></h3>
      <h5><p></p></h5>
      <img src="./../../../src/images/Program.png" class="card-im-left" width="100%">
      <h4>
        <font>
             <a href="http://www.ieee-rcar.com/uploads/IEEE_RCAR_2020_Detailed_Technical_Program.pdf" target="_blank" style="background-color:transparent;color: rgb(250,0,0);">Click here to download the Program in PDF</a>
        </font>
      </h4>
      <br>
      <h4>Please try the LiveLink below if the room is full.</h4>
      <div class="msg bg-white px-2"><Table /></div>
      <h1 span style="color:rgb(0,102,204)">
        Detailed Technical Program
      </h1>
      <br>
      <img src="./../../../src/images/Detailed.png" width="100%"> 
      <h4>
        <font>
             <a href="http://www.ieee-rcar.com/uploads/IEEE_RCAR_2020_Technical_Sessions.pdf" target="_blank" style="background-color:transparent;color: rgb(250,0,0);">Click here to download the Detailed Technical Program in PDF</a>
        </font>
      </h4>
      
  </div>
</template>

<script>
import Vue from "vue";
import Table from "./../components/LiveLinkTable.vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
export default {
  name: "home",
  components: {
    Table,
  }
};
</script>

<style>
.home {
  max-width: 1366px;
  margin:auto;
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
