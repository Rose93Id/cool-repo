<template>
  <div id="app">
    <web-map />
  </div>
</template>

<script>
// @ is an alias to /src
import WebMap  from '@/components/Webmap.vue'

export default {
  name: 'Home',
  components: {
    WebMap 
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>