<template>
  <div id="app" class="container">
    <Navbar />
    <transition name="fade">
      <div class="gap">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
import Navbar from './components/Nav.vue'
export default {
  name: 'App',
  components:{
  Navbar
  },
  methods:{
    ...mapActions(['setAuth'])
  },
  created(){
    this.setAuth()
  }
}
</script>

<style>

 .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>
