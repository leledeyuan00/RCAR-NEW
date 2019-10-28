<template>
<el-menu
  :default-active="0"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#3E99C9"
  text-color="#FFF"
  >
  <el-menu-item index="1">
    <p class="el-icon-house pt-2"></p>
    <template slot="title">Home</template>
  </el-menu-item>
  <el-menu-item index="2">
    <template slot="title">Committee</template>
  </el-menu-item>
  <el-submenu index="3">
    <template slot="title">Program</template>
    <el-menu-item index="3-1">Program at a Glance</el-menu-item>
    <el-menu-item index="3-2">Invited Speakers</el-menu-item>
    <el-menu-item index="3-3">Tutorials & Workshops</el-menu-item>
  </el-submenu>
  <el-menu-item index="4">
    <template slot="title">Call for Papers</template>
  </el-menu-item>
  <el-submenu index="5">
    <template slot="title">Submission</template>
    <el-menu-item index="5-1">Final Submission</el-menu-item>
    <el-menu-item index="5-2">Initial Submission</el-menu-item>
  </el-submenu>
  <el-menu-item index="6">
    <template slot="title">Registration</template>
  </el-menu-item>
  <el-submenu index="7">
    <template slot="title">Venue</template>
    <el-menu-item index="7-1">Conference Venue</el-menu-item>
    <el-menu-item index="7-2">Accommodation</el-menu-item>
    <el-menu-item index="7-3">About Asahikawa</el-menu-item>
  </el-submenu>
  <el-menu-item index="8">
    <template slot="title">History</template>
  </el-menu-item>
  <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
</el-menu>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>