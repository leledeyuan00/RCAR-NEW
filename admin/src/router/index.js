import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./../views/Main.vue";
import Login from './../views/Login.vue'
import AdminUserEdit from './../views/AdminUserEdit.vue'
import AdminUserList from './../views/AdminUserList.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/articles/create",
        name: "ArticleEdit",
        component: () =>
          import(
            /* webpackChunkName: "ArticleEdit" */ "./../views/ArticleEdit.vue"
          )
      },
      {
        path: "/articles/edit/:id",
        name: "ArticleEdit",
        component: () =>
          import(
            /* webpackChunkName: "ArticleEdit" */ "./../views/ArticleEdit.vue"
          ),
        props: true
      },
      {
        path: "/articles/list",
        name: "ArticleList",
        component: () =>
          import(
            /* webpackChunkName: "ArticleList" */ "./../views/ArticleList.vue"
          )
      },
      { path: "/admin_users/create", component: AdminUserEdit },
      { path: "/admin_users/edit/:id", component: AdminUserEdit, props: true },
      { path: "/admin_users/list", component: AdminUserList }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from ,next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router;
