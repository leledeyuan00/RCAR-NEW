<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#3E99C9"
    text-color="#FFF"
  >
    <el-menu-item index="1">
      <template slot="title">
        <router-link tag="div" :to="'./'">
          <p class="el-icon-house pt-2"></p>Home
        </router-link>
      </template>
    </el-menu-item>
    <el-menu-item disabled index="2">
      <template slot="title">Committee</template>
    </el-menu-item>
    <el-submenu disabled index="3">
      <template slot="title">Program</template>
      <el-menu-item index="3-1">Program at a Glance</el-menu-item>
      <el-menu-item index="3-2">Invited Speakers</el-menu-item>
      <el-menu-item index="3-3">Tutorials & Workshops</el-menu-item>
    </el-submenu>
    <el-menu-item disabled index="4">
      <template slot="title">Call for Papers</template>
    </el-menu-item>
    <el-submenu disabled index="5">
      <template slot="title">Submission</template>
      <el-menu-item index="5-1">Final Submission</el-menu-item>
      <el-menu-item index="5-2">Initial Submission</el-menu-item>
    </el-submenu>
    <el-menu-item disabled index="6">
      <template slot="title">Registration</template>
    </el-menu-item>
    <el-submenu disabled index="7">
      <template slot="title">Venue</template>
      <el-menu-item index="7-1">Conference Venue</el-menu-item>
      <el-menu-item index="7-2">Accommodation</el-menu-item>
      <el-menu-item index="7-3">About Asahikawa</el-menu-item>
    </el-submenu>
    <el-menu-item index="8">
      <template slot="title">
        <router-link tag="div" :to="'./history'">History</router-link>
      </template>
    </el-menu-item>
    <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1"
    };
  }
};
</script>

<style lang="scss">
.el-menu {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
