import "./set-public-path";
import { h, createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import ElementPlus from 'element-plus'
import singleSpaVue from 'single-spa-vue';


import App from './App.vue';

import 'element-plus/dist/index.css'

import RouteOne from './views/RouteOne'
import RouteTwo from './views/RouteTwo'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/route1', component: RouteOne },
  { path: '/route2', component: RouteTwo },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance: (app) => {
    app.use(router)
    app.use(ElementPlus)
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
