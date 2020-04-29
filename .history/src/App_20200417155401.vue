<template>
  <v-app>
    <div>
    <v-app-bar
      app
      color="orange accent-4"
      dark
    >
    <v-toolbar-title class='font-weight-bold title white--text'>Arup</v-toolbar-title>
    <v-toolbar-title class='font-weight-bold title blue--text'>D3</v-toolbar-title>
    <v-toolbar-title class='font-weight-bold title white--text'>Vue Template</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click='sidebar = !sidebar'>
      <v-btn-text>sidebar</v-btn-text>
    </v-btn>
    </v-app-bar>
  </div>
    <v-content class='fill-height'>
      <v-container fluid class='fill-height ma-0'>
        <v-row dense no-gutters class='top-row'>
          <v-col cols='3'>
            <Input class='fill-height' />
          </v-col>
          <v-col>
            <v-card class="fill-height">
              <router-view class='fill-height'></router-view>
            </v-card>
          </v-col>
          <v-col cols='1' v-if='sidebar'>
            <v-card class='fill-height'>
              <v-card-text>sidebar</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class='bottom-row'>
          <v-col cols='12'>
            <Visualization />
          </v-col>
        </v-row>
      </v-container>
      <!-- <router-view></router-view> -->
    </v-content>
  </v-app>
</template>

<script>
import Input from './components/Input.vue'
import Visualization from './components/Visualization'
export default {
  name: 'App',

  components: {
    Input,
    Visualization
  },

  data: () => ({
    sidebar: false
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
.flexcard {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.top-row {
  height: 65%
}
.bottom-row {
  height: 35%
}
.flexcard .v-toolbar {
  flex: 0;
}
</style>