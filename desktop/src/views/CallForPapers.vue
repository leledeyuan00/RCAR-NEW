<template>
  <div class="body-main">
    <div class="ql-container ql-snow">
      <div class="d-flex jc-between">
        <div class="ql-editor px-3 bg-white fs-xxl left-part" v-html="models[3].submenus[0].body"></div>
        <div class="ql-editor px-3 bg-white fs-xxl right-part" v-html="models[3].submenus[1].body"></div>
      </div>
    </div>
    <div class="SchoolBadge">
      <SchoolBadge />
    </div>
  </div>
</template >

<script>
import SchoolBadge from "./../components/SchoolBadge.vue";
export default {
  components: {
    SchoolBadge
  },
  props: {
    title: {},
  },
  data() {
    return {
      models: {
        submenus: {}
      }
    };
  },
  methods: {
    async fetchArticles() {
      const res = await this.$http.get("articles");
      this.models = res.data;
      console.log(this.models);
    }
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style>
.left-part{
  width: 66.6666667%;
  position: relative;
  margin-right: 5px;
  display:inline;
  border-radius: 2px;
}
.right-part{
  width: 30%;
  position: relative;
  margin-left: 5px;
  display:inline;
  border-radius: 2px;
}
</style>