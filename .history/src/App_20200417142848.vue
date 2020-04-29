<template>
  <v-app>
    <div>
    <v-app-bar
      app
      color="deep-purple accent-4"
      dense
      dark
    >
    <v-toolbar-title>Screw you web development</v-toolbar-title>
    </v-app-bar>
  </div>
    <v-content class='fill-height'>
      <v-container class='fill-height'>
        <v-row class='fill-height'>
          <v-col cols='4'>
            <v-card class='top-row'>
              <v-card-text>
                <div>Inputs</div>
                <v-divider light />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols='8'>
            <v-card class="top-row">
              <router-view class='top-row'></router-view>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols='12' class='half-height'>
            test
          </v-col>
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
.flexcard {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.top-row {
  height: 75%
}
.flexcard .v-toolbar {
  flex: 0;
}
</style>