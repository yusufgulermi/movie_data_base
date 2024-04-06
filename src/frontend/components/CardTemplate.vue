<template>
    <div class="relative flex justify-between items-center flex-col min-w-52">
        <img @click="updateFavoriteState(id)"
            class="absolute top-6 right-6 w-5 h-5 rounded-full bg-[#fff] opacity-90 p-[1px] cursor-pointer"
            v-bind:class="{'bg-[#FFFF00]': favoriteStore.favorite[id]}"
            src="../assets/star.png">
        <img class="rounded-[50px]" :src="defaultUrl + posterPath">
        <div class="flex items-center h-10 justify-center text-center font-extrabold">
            {{ title }}
        </div>
        <div class="opacity-50 font-semibold">
            {{ releaseDate }}
        </div>
        <div class="font-semibold">
            Vote: {{ Number(voteAverage.toFixed(1)) * 10 }}%
        </div>
        <div class="font-semibold">
           {{favoriteStore.favorite[289]}}
        </div>
    </div>
</template>

<script>
import { useFavoriteStore } from '../../store/favorite';

export default {
    data() {
        return {
            favoriteStore: useFavoriteStore(),
            isActive: false
        }
    },

    methods: {
        updateFavoriteState (id) {
            this.favoriteStore.updateStatus(id);
            this.isActive = !this.isActive;
        },
    },

    props: {
        id: Number,
        title: String,
        releaseDate: String,
        voteAverage: Number,
        posterPath: String,
        defaultUrl: String,
    }
}
</script>