import Vue from "vue";
import VueRouter from "vue-router";
import MainMenu from "../views/MainMenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainMenu",
    component: MainMenu
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/level",
    name: "LevelSelection",
    component: () => import("../views/LevelSelection")
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: () => import("../views/Sandbox")
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/TrailRunner")
  },
  {
    path: "/lose",
    name: "Lose",
    component: () => import("../views/LoseScreen")
  },
  {
    path: "/win",
    name: "Win",
    component: () => import("../views/WinScreen")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
