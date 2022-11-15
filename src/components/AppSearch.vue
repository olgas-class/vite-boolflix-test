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
    <div>
        <input type="search" v-model="store.searchKey">
        <button @click="$emit('performSearch')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>