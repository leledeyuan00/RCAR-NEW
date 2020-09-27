<template>
  <el-menu
    class="el-menu-demo  fw-xxl"
    mode="horizontal"
    background-color="#3E99C9"
    text-color="#FFF"
    active-text-color="#000"
    router
  >
    <el-menu-item index="./">
      <template slot="title">
        <p class="el-icon-house pt-2"></p>
        Home
      </template>
    </el-menu-item>
    <el-menu-item index="./Committee">
      <template slot="title"
        >Committee</template
      >
    </el-menu-item>
    
    <el-submenu  index="2">
      <template slot="title">Program</template>
      <el-menu-item index="./Program">Program at a Glance</el-menu-item>
      <el-menu-item index="./Plenary">Plenary Speakers</el-menu-item>
      <el-menu-item index="./Keynote">Keynote Speakers</el-menu-item>
      <el-menu-item index="./Technical">Technical Sessions</el-menu-item>
    </el-submenu>
   
    <el-menu-item index="./CallForPapers">
      <template slot="title"
        >Call for Papers</template
      >
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title"
        >Submission</template
      >
      <el-menu-item index="./InitialSubmission"
        >Initial Submission</el-menu-item
      >
      <el-menu-item index="./FinalSubmission">Final Submission</el-menu-item>
    </el-submenu>
    <el-menu-item index="./Registration">
      <template slot="title"
        >Registration</template
      >
    </el-menu-item>
    <!--
    <el-submenu  index="4">
      <template slot="title">Venue</template>
      <el-menu-item index="./ConferenceVenue">Conference Venue</el-menu-item>
      <el-menu-item index="./Accommodation">Accommodation</el-menu-item>
      <el-menu-item index="./AboutAsahikawa">About Asahikawa</el-menu-item>
    </el-submenu>
    -->
    <el-menu-item index="./history">
      <template slot="title"
        >History</template
      >
    </el-menu-item>
    <el-menu-item>
      <template slot="title">
        <p class="el-icon-question pt-2"></p>
        <a href="https://github.com/leledeyuan00/rcar_wiki/wiki/FAQ">
        FAQ
        </a>
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
      activeIndex2: "1",
      articles: [],
    };
  },
  methods: {
    async fetchArticles() {
      const res = await this.$http.get("articles");
      this.articles = res.data;
      console.log(this.articles);
    },
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style lang="scss">
.el-menu {
  position: sticky;
  top: 0;
  z-index: 999;
}
.el-menu-item {
  font-size: 16px !important;
}
.el-submenu__title {
  font-size: 16px !important;
}
</style>
