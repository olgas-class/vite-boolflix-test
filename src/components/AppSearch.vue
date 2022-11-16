<script>
import { store } from "../store";
export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header class="app-header">
        <div class="container flex justify-between app-header__inner">
            <div class="app-header__logo">
                Boolflix
            </div>
            <div class="app-header__search">
                <input type="search" v-model="store.searchKey">
                <button @click="$emit('performSearch')">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.app-header {
    height: $header-height;
    background-color: black;

    &__inner {
        height: 100%;
    }

    &__logo {
        text-transform: uppercase;
        font-size: 2rem;
        color: red;
    }

    &__search {
        display: flex;
        align-items: center;
    }
}
</style>