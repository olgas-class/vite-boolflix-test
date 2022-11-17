<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovieDetails(clickedId) {
            console.log("Fai chiamata axios per prendere i dettagli del movie. Il mio id è" + clickedId);
        }
    }
}
</script>

<template>
    <div class="container">
        <section>
            <h2>Movies</h2>
            <div class="row">
                <div class="col" v-for="movie in store.movies" :key="movie.id">
                    <AppCard @detailsClicked="getMovieDetails" :item="movie" />
                </div>
            </div>
        </section>

        <section>
            <h2>Serie TV</h2>
            <div class="row">
                <div class="col" v-for="serie in store.series" :key="serie.id">
                    <AppCard :item="serie" />
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
section {
    h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 1em;
    }
}

.row {
    display: flex;
    flex-wrap: wrap;

    .col {
        width: calc(100% / 4 - 10px);
        margin-bottom: 1rem;
        margin-left: 5px;
        margin-right: 5px;
    }
}
</style>