<template>
  <div class="body-main">
    <div class="ql-container ql-snow">
      <div class="ql-editor px-3 bg-white fs-xxl" 
      v-html="models[0].submenus[0].body">
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style>
</style>