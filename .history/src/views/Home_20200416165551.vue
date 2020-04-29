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
