<template>
  <v-app>
    <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
    </v-app-bar>
  </div>
    <v-content>
      <v-container>
        <v-row>
          <v-col col='4'>test</v-col>
          <v-col col='8' id='app'><router-view></router-view></v-col>
        </v-row>
      </v-container>
      <!-- <router-view></router-view> -->
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
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