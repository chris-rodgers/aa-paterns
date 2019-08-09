<template>
  <div class="radius">6px</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .radius{
    border-radius: 6px;
    padding: 20px;
    background: #ddd;
  }
</style>
