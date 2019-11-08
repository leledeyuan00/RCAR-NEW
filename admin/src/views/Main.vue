<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/articles/create">新建分类</el-menu-item>
            <el-menu-item index="/articles/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group>
            <el-menu-item index="/Committee">Committee</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-2">
            <template slot="title">Program</template>
            <el-menu-item index="/program">Program at a Glance</el-menu-item>
            <el-menu-item index="/invitedSpeakers">Invited Speakers</el-menu-item>
            <el-menu-item index="/tutorials">Tutorials & Workshops</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-1">Call for Papers</el-menu-item>
          <el-submenu index="3-1">
            <template slot="title">Submission</template>
            <el-menu-item index="3-2">Final Submission</el-menu-item>
            <el-menu-item index="3-3">Initial Submission</el-menu-item>
          </el-submenu>
          <el-menu-item index="4-1">Registration</el-menu-item>
          <el-submenu index="5-1">
            <template slot="title">Venue</template>
            <el-menu-item index="5-2">Conference Venue</el-menu-item>
            <el-menu-item index="5-3">Accommodation</el-menu-item>
            <el-menu-item index="5-4">About Asahikawa</el-menu-item>
          </el-submenu>
          <el-submenu index="6-1">
            <template slot="title">Travel</template>
            <el-menu-item index="6-2">Visa</el-menu-item>
            <el-menu-item index="6-3">Transportation</el-menu-item>
            <el-menu-item index="6-4">Travel Information</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1">History</el-menu-item>-->
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>系统管理
          </template>
          <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>RCAR 管理员系统</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

