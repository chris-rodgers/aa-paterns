<template>
  <div id="app">
    <header class="header">
      <div class="wrapper">
        <img class="header__logo" src="./assets/logo.svg">
      </div>
    </header>
    <div class="wrapper">
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
import AsideNav from "@/components/Aside";

export default {
  name: "App",
  components: {
    AsideNav
  }
};
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid #dedddc;
  margin-bottom: 40px;
  &__logo {
    padding: 15px 50px;
  }
}
.wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
}
.main {
  flex: 1;
  padding: 0 20px 0 40px;
  &__title {
    margin-bottom: 12px;
    overflow: hidden;
  }
  &__content{
    position: relative;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  position: absolute;
  width: 100%;;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
body {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 2rem;
}
*{
  box-sizing: inherit;
}
body{
  box-sizing: border-box;
}
</style>
