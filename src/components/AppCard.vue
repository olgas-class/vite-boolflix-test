<script>
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            availableFlags: ['en', 'it']
        }
    },
    computed: {
        getTitle() {
            // Se c'è la chiave title, ritorna title, se no name
            // if (this.item.title) {
            //     return this.item.title;
            // } else {
            //     return this.item.name;
            // }
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getImagePath() {
            return this.item.poster_path ? `http://image.tmdb.org/t/p/w342/${this.item.poster_path}` : this.getImgUrl('no-image.jpg');
        },
        getStarsNumber() {
            return Math.ceil(this.item.vote_average / 2);
        }
    },
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/images/${imgName}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card__inner">
            <div class="card__front">
                <!-- <img v-if="item.poster_path" :src="`http://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
            <img v-else src="../assets/images/no-image.jpg" alt=""> -->
                <img :src="getImagePath" alt="">
            </div>
            <div class="card__back">
                <h3>Titolo: {{ getTitle }}</h3>
                <p>Titolo originale: {{ getOriginalTitle }}</p>
                <div class="flag">
                    <img v-if="availableFlags.includes(item.original_language)"
                        :src="getImgUrl(`${item.original_language}.png`)">
                    <p v-else>Lingua: {{ item.original_language }}</p>
                </div>
                <div>
                    <!-- <p>Voto: {{ item.vote_average }}</p>
                    <p>Voto: {{ getStarsNumber }}</p> -->
                    <!-- n: 1 2 3 4 5 -->
                    <!-- <div>
                <span v-for="n in 5" :key="n">{{ n }}</span>
            </div> -->
                    <i v-for="n in 5" :key="n" :class="n <= getStarsNumber ? 'fa-solid' : 'fa-regular'"
                        class="fa-star"></i>
                    <!-- <i class="fa-regular fa-star"></i> -->

                </div>
                <div>
                    <button @click="$emit('detailsClicked', item.id)">Vedi dettagli</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 100%;
    perspective: 1000px;

    &__inner {
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform .8s;
    }

    &:hover &__inner {
        transform: rotateY(180deg);
    }

    &__front,
    &__back {
        backface-visibility: hidden;
    }

    &__front {
        height: 100%;

        img {
            height: 100%;
        }
    }

    &__back {
        position: absolute;
        top: 0;
        left: 0;
        // z-index: -1;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background-color: rgba(#000000, .8);
        color: white;
        padding: 1rem;
        transform: rotateY(180deg);

        .flag {
            width: 50px;
        }

        >* {
            margin-bottom: .5rem;
        }
    }

    // &:hover &__back {
    //     z-index: 100;
    // }
}
</style>