<template>
  <div>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <nav-bar ref="navbar"></nav-bar>
      <transition :name="transitionName" :mode="transitionMode">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
      <nav-footer ref="navFooter"></nav-footer>
    </div>
  </div>
</template>

<script>
import navBar from './components/_nav_bar.vue'
import navFooter from './components/_footer.vue'
export default {
  name: 'App',
  components: { navBar, navFooter },
  data: function () {
    return {
      transitionName: 'slide-left',
      transitionMode: 'out-in'
    }
  },
  methods: {
    setTransition: function (n, m) {
      this.transitionName = n
      this.transitionMode = m
    }
  }
}
</script>

<style>
/** transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }

  .zoom-enter-active,
  .zoom-leave-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: zoom;
  }

  .zoom-leave-active {
    animation-direction: reverse;
  }
</style>
