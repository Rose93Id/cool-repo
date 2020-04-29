<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <map/>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Map
  }
}
</script>
