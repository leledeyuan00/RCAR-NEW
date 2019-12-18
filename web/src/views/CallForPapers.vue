<template>
  <div class="body-main">
    <div >
        <div
          class="px-3 bg-white"
          v-html="models[3].submenus[0].body"
        ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {}
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

<style lang="scss">
@import "./../../../src/scss/_variables.scss";
.body-main{
  font-size:map-get($font-sizes, "xl") * $base-font-size
}
</style>
