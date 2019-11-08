<template>
  <div class>
    <h1>{{id ? '编辑': '新建'}}分类</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="分类名称">
        <el-input v-model="model.name" :disabled="model.islocked"></el-input>
      </el-form-item>

      <div style="margin-bottom:2rem; margin-left:7rem">
        <el-checkbox v-model="model.islocked" border>Locked</el-checkbox>
      </div>
      <span style="margin-bottom:2rem; margin-left:7rem">
        <el-checkbox v-model="model.ismenu" border>Menu</el-checkbox>
      </span>
      <span style="margin-bottom:2rem; margin-left:2rem">
        <el-checkbox v-model="model.isdisable" border>Disable</el-checkbox>
      </span>
      <span style="margin-right:2rem; margin-left:2rem">
        <el-button
          size="large"
          type="info"
          @click="model.submenus.push({})"
          :disabled="model.islocked || model.ismenu"
        >
          <i class="el-icon-plus"></i> View
        </el-button>
      </span>
      <!-- body段 -->
      <el-tabs type="border-card" style="margin-left:7rem; margin-top:2rem">
        <el-tab-pane
          :label="item.name?item.name: `NewView`"
          :name="i"
          v-for="(item,i) in model.submenus"
          :key="i"
        >
          <el-form-item label="Title">
            <el-input v-model="item.name"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <vue-editor
              id="editor"
              v-model="item.body"
              useCustomImageHandler
              @image-added="handleImageAdded"
              style="height:100%"
            ></vue-editor>
          </el-form-item>
          <el-form-item>
            <el-button
              size="small"
              type="danger"
              @click="model.submenus.splice(i, 1)"
              :disabled="model.islocked"
            >删除</el-button>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>

      <el-form-item style="margin-top: 2rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
// import axios from "axios";
export default {
  props: {
    id: {}
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {
        name: [],
        body: [],
        submenus: [],
        ismenu: false,
        isdisable: false,
        islocked: false
      }
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("upload", formData);
      console.log(123);
      console.log(res.data.url);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      // Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      console(res);
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
</style>