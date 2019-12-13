<template>
  <div class="body-main">
    <div class="ql-container ql-snow">
      <div class="ql-editor px-3 bg-white fs-xxl" v-html="models[2].submenus[1].body"></div>
    </div>
    <div class="SchoolBadge">
        <SchoolBadge />
    </div>
  </div>
</template>

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
</style>