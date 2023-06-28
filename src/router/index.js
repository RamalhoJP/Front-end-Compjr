import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView";
import CarouselView from "../views/CarouselView";
import RegisterView from "../views/RegisterView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "carousel",
    component: CarouselView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
