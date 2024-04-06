import { defineStore } from "pinia";

export const useFavoriteStore = defineStore({
    id:'favorite',
    state:() =>({
        favorite: {}
    }),
    actions: {
        updateStatus(id) {
            this.favorite[id] = !this.favorite[id];
        }
    },
})