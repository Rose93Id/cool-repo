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
      <v-container class='fill-height'>
        <v-row>
          <v-col col='4'>
            <v-card>
              <v-card-text style="overflow-y: auto; height:100" >
                <div class="body-1">test</div>
                <v-divider light style="margin-top:15px;" />
                <v-divider light />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col col='8'><router-view></router-view></v-col>
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

.flexcard .v-toolbar {
  flex: 0;
}
</style>