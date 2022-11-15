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
    }
}
</script>

<template>
    <main>
        <section>
            <h2>Movies</h2>
            <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
        </section>

        <section>
            <h2>Serie TV</h2>
            <AppCard v-for="serie in store.series" :key="serie.id" :item="serie" />
        </section>

    </main>
</template>

<style lang="scss" scoped>

</style>