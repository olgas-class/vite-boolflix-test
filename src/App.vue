<script>
import { store } from "./store";
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
import AppMain from "./components/AppMain.vue";
import AppLoader from "./components/AppLoader.vue";

export default {
  components: {
    AppSearch,
    AppMain,
    AppLoader
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

      const moviesReq = axios.get(`${this.store.apiURL}/movie`, {
        params: paramsObj
      });
      const seriesReq = axios.get(`${this.store.apiURL}/tv`, {
        params: paramsObj
      });

      this.store.loading = true;

      Promise.all([moviesReq, seriesReq]).then(responses => {
        console.log("Arrivate le risposte");
        this.store.movies = responses[0].data.results;
        this.store.series = responses[1].data.results;
        this.getMoviesDetails();
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        console.log("Stop loading");
        this.store.loading = false;
      })

      // this.getMovies(paramsObj);
      // this.getSeries(paramsObj);
    },
    getMoviesDetails() {
      this.store.movies.forEach(movie => {
        console.log("chiamata axios per cast");
        console.log("Chiamate axios per generi");
      })
    },
    // getMovies(paramsObj) {
    //   this.store.loading = true;
    //   axios
    //     .get(`${this.store.apiURL}/movie`, {
    //       params: paramsObj
    //     })
    //     .then((resp) => {
    //       console.log('movies arrivati');
    //       this.store.movies = resp.data.results;
    //       this.getMoviesDetails();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       console.log('Loading stoppato');
    //       this.store.loading = false;
    //     })
    // },
    // getSeries(paramsObj) {
    //   this.store.loading = true;
    //   axios
    //     .get(`${this.store.apiURL}/tv`, {
    //       params: paramsObj
    //     })
    //     .then((resp) => {
    //       console.log('Series arrivati');
    //       this.store.series = resp.data.results;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       console.log('Loading stoppato');
    //       this.store.loading = false;
    //     })
    // }
  }
}
</script>

<template>
  <div class="">
    <AppSearch @performSearch="search" />
    <main>
      <AppLoader v-if="store.loading" />
      <AppMain v-else />
    </main>
  </div>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;

main {
  width: 100%;
  height: calc(100vh - $header-height);
  background-color: gray;
  overflow-y: auto;
}
</style>