<template>
 <div class="Name">
   
    <el-row :gutter="20">
      <el-col :span="6">
        <img src="./../../icon/RCAR.png"  alt="" />
        <!-- <div class="demo-image">
          <div class="block" >
            <el-image
              style="width: 100px; height: 100px"
              :src="src"></el-image>
          </div>
        </div> -->
      </el-col>
      <el-col :span="18" :offset="0">
        <div class="Title pt-4">
        <h5><b>2020 IEEE International Conference on Real-time</b></h5>
        <h5><b>Computing and Robotics</b></h5>
        <h5>August 2-6, 2020, Asahikawa, Japan</h5>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'Head',
}
</script>

<style>
  .Icon{
    color:darkgreen;
    text-align: left;
    font-family: "San Francisco UI",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .Title{
    color:darkgreen;
    text-align: right;
    font-family: "San Francisco UI",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>