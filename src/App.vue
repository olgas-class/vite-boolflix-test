<script>
import { store } from "./store";
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppSearch,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      console.log("Inizia la ricerca");
      const paramsObj = {
        api_key: this.store.apiKey,
        query: this.store.searchKey
      }
      this.getMovies(paramsObj);
      this.getSeries(paramsObj);
    },
    getMovies(paramsObj) {
      axios
        .get(`${this.store.apiURL}/movie`, {
          params: paramsObj
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
        .catch(err => {
          console.log(err);
        })
    },
    getSeries(paramsObj) {
      axios
        .get(`${this.store.apiURL}/tv`, {
          params: paramsObj
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<template>
  <div class="container">
    <AppSearch @performSearch="search" />
    <AppMain />
  </div>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>