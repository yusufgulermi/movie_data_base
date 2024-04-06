<template>
    <main class="overflow-y-hidden">
        <div class="flex w-full h-96 items-center justify-center flex-col relative">
          <div class="w-full absolute bg-home-background bg-no-repeat bg-center bg-cover h-full blur-sm brightness-75"></div>
          <p class="relative text-4xl text-white w-9/12 mb-5 font-semibold">Welcome.<br>Millions of movies, TV shows and people to discover. Explore now.</p>
          <label class="w-9/12 relative h-10">
            <input class="w-full absolute h-full rounded-full focus:outline-none pl-5" type="text" placeholder="Search for a movie, tv show, person......">
            <button class="w-28 h-full text-white rounded-full absolute bg-[#17819B] right-0 hover:text-black font-semibold"> Search </button>
          </label>
        </div>
        <div class="flex w-max items-center pl-10">
            <p class="text-2xl font-semibold">Show Case</p> 
            <div class="m-5 flex rounded-full border-2 border-solid border-black w-max"> 
                <RedirectButton 
                v-on:dataChange="changeData"
                :isActive="isActive"
                />
            </div>
        </div>
        <div class="flex overflow-x-scroll relative mx-10 gap-4">
          <CardTemplate 
          v-for="card in filteredData" 
          :key="card.id" 
          :id="card.id" 
          :title="card.title" 
          :releaseDate="card.release_date"
          :voteAverage="card.vote_average"
          :posterPath="card.poster_path"
          :defaultUrl="'https://media.themoviedb.org/t/p/w220_and_h330_face'"
          />
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import CardTemplate from '../components/CardTemplate.vue';
import RedirectButton from '../components/RedirectButton.vue';
import { HEADER, PAYLOADS } from '@/backend/Enums/MovieDataEnums';

export default {
    components: {
      CardTemplate,
      RedirectButton
    },

    data() {
      return {
        filteredData: [],
        isActive: true,
      }
    },

    beforeMount () {
      this.fetchData(PAYLOADS.MOST_POPULAR);
    },

    methods: {
        async fetchData (url) {
              let config = {
                  method: 'get',
                  maxBodyLength: 2,
                  url: url,
                  headers: HEADER
              };

              this.filteredData = await axios.request(config)
              .then((response) => {
                  return response.data.results;
              })
              .catch((error) => {
                  console.log(error);
              });
          },
        
          changeData(position) {
              if (position === 0) {
                  this.fetchData(PAYLOADS.MOST_POPULAR);
                  this.isActive = true;
              } else if (position === 1) {
                  this.fetchData(PAYLOADS.TOP_RATED);
                  this.isActive = false;
              }
          },
    }
}
</script>
