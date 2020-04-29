<template>
  <v-app>
    <div>
    <v-app-bar
      app
      color="deep-purple accent-4"
      dark
    >
    <v-toolbar-title>Arup - D3 - Vue Template</v-toolbar-title>
    </v-app-bar>
  </div>
    <v-content class='fill-height'>
      <v-container fluid class='fill-height ma-0'>
        <v-row dense no-gutters class='top-row'>
          <v-col cols='3'>
            <v-card class='fill-height'>
              <input />
              <!-- <v-card-text>
                <div>Inputs</div>
                <v-divider light />
              </v-card-text> -->
            </v-card>
          </v-col>
          <v-col cols='9'>
            <v-card class="fill-height">
              <router-view class='fill-height'></router-view>
            </v-card>
          </v-col>
        </v-row>
        <v-row class='bottom-row'>
          <v-col cols='12'>
            <v-card class="fill-height">
              <v-card-text>
                <div>Visualization</div>
              </v-card-text>
            </v-card>
            <!-- test -->
          </v-col>
        </v-row>
      </v-container>
      <!-- <router-view></router-view> -->
    </v-content>
  </v-app>
</template>

<script>
import Input from './components/Input.vue'

export default {
  name: 'App',

  components: {
    Input
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