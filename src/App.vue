<template>
  <div id="app">
    <header class="header">
      <div class="wrapper">
        <div class="header__inner">
          <img class="header__logo" src="./assets/logo.svg">
          <button class="header__button" v-on:click="open = !open">
            <burger class="header__burger"/>
          </button>
        </div>
      </div>
    </header>
    <div class="wrapper wrapper--offcanvas" v-bind:class="{'wrapper--active': open}">
      <aside-nav/>
      <main class="main">
        <div class="main__title">
          <h1>{{ $route.name }}</h1>
        </div>
        <div class="main__content">
          <transition name="fade">
            <router-view/>
          </transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AsideNav from "@/modules/Aside";
import Burger from "./assets/icons/Og Burger.svg?inline";

export default {
  name: "App",
  data() {
    return { open: false };
  },
  components: {
    AsideNav,
    Burger
  }
};
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid #dedddc;
  margin-bottom: 40px;
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    height: 40px;
    margin: 10px 20px;
    @include breakpoint("tablet") {
      height: 50px;
      margin: 15px 50px;
    }
  }
  &__button {
    line-height: 0;
  }
  &__burger {
    width: 20px;
    height: 20px;
    margin: 20px;
    line {
      stroke: $blue;
    }
    @include breakpoint("mobile") {
      display: none;
    }
  }
}
.wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  &--offcanvas {
    transition: transform 0.5s ease;
    @include breakpoint("mobile", "down") {
      width: calc(100vw + 200px);
      transform: translateX(-200px);
    }
  }
  &--active {
    transform: translateX(0);
  }
}
.main {
  flex: 1;
  padding: 0 20px;
  min-width: 100vw;
  @include breakpoint("mobile") {
    min-width: auto;
  }
  @include breakpoint("tablet") {
    padding: 0 20px 0 40px;
  }
  &__title {
    margin-bottom: 12px;
    overflow: hidden;
  }
  &__content {
    position: relative;
  }
}
</style>
