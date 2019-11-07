import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/articles/create",
        name:"ArticleEdit",
        component: () =>
          import(
            /* webpackChunkName: "ArticleEdit" */ "./../views/ArticleEdit.vue"
          )
      },
      {
        path: "/articles/edit/:id",
        name:"ArticleEdit",
        component: () =>
          import(
            /* webpackChunkName: "ArticleEdit" */ "./../views/ArticleEdit.vue"
          ),
        props: true
      },
      {
        path: "/articles/list",
        name:"ArticleList",
        component: () =>
          import(
            /* webpackChunkName: "ArticleList" */ "./../views/ArticleList.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
