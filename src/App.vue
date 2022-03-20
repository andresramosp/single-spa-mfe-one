<template>
  <div>
    <div class="login-info">
      <div class="logged" v-if="logged">
        Logged in with token {{ token }}
      </div>
      <div class="not-logged" v-else>Not Logged</div>
    </div>
    <h1>{{ "Micro Frontend One (Vue 3 + ElementPlus)" }}</h1>
    <router-link to="/route1">Go to Home</router-link>
    <br />
    <router-link to="/route2">Go to About</router-link>
    <br />
    <div style="margin-top: 20px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth$ } from "org/auth";
export default {
  name: "App",
  components: {},
  setup() {

    const logged = ref(false);
    const user = ref("");
    const token = ref("");

     auth$.subscribe((payload) => {
      token.value = payload.sessionToken;
      user.value = payload.user;
      logged.value = payload.sessionToken !== null;
    });

    return {
      logged,
      user,
      token,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.login-info {
  /* position: absolute;
  top: 0px;
  left: 0px; */
}
.not-logged {
  background-color: pink;
  width: 100px;
}
.logged {
  background-color: greenyellow;
  width: 250px;
}
</style>
