<template>
  <v-card class="fill-height">
    <v-card-text>Visualization</v-card-text>
    <p class="info" id="name">State Name:{{ Name }}</p>
    <p class="info" id="population">Population:{{ Pop }}</p>
    <p>{{ userInfo }}</p>
  </v-card>
</template>

<script>
import axios from "axios"
export default {
  name: "Visualization",
  data() {
    return {
      userInfo: null,
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.userInfo = response.data.bpi
      })
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  },

  computed: {
    Name() {
      return this.$store.state.name
    },
    Pop() {
      return this.$store.state.population
    },
  },
  methods: {
    getName() {
      this.$store.dispatch("setName")
    },
    getPopulation() {
      this.$store.dispatch("setPopulation")
    },
  },
}
</script>

<style scoped></style>
