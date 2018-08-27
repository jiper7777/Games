import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

export const eventBus = new Vue({
  data() {
    return {

    }
  },
    methods: {
    }
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});


// methods: {
//   changeName(age) {
//     this.$emit('ageWasEdited', age);
//   }
