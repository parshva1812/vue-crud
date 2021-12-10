<template>
  <div>
    <!-- <p>{{ auth_check }}</p> -->
    <nav
      class="navbar navbar-expand-sm bg-light navbar-fixed-top"
      v-show="auth_check"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'create' }" class="nav-link"
            >Add Post</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'index' }" class="nav-link"
            >All Post</router-link
          >
        </li>
        <li class="nav-item">
          <button class="btn btn-primary" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: mapGetters(["auth_check"]),
  methods: {
    ...mapActions(["setAuth"]),
    logout() {
      // alert("j")
      localStorage.clear();
      this.setAuth().then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>
<style>
nav {
  z-index: 99;
  position: fixed;
}
</style>
