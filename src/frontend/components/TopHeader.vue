<template>
    <div class="flex gap-5 items-center mr-5">
        <div class="flex items-center justify-center text-white bg-[#0C66E4] gap-1 cursor-pointer rounded text-sm py-1.5 pr-2.5 p-1.5">
            <span class="flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                    <path d="M13 11V7a1 1 0 00-2 0v4H7a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2h-4z"
                        fill="currentColor" fill-rule="evenodd">
                    </path>
                </svg>
            </span>
            <span>Create</span>
        </div>
        <div class="relative w-max">
            <span class="absolute w-4 h-4 text-white top-2 left-2">
                <svg class="w-4 h-4 text-black" width="24" height="24" viewBox="0 0 24 24" role="presentation">
                    <path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                        fill="currentColor" fill-rule="evenodd">
                    </path>
                </svg>
            </span>
            <input @input="debounceInput" class="h-8 w-full outline-none rounded-sm text-sm text-black bg-search-grey pr-3.5 pl-7 border-gray-400 border-solid border-2" placeholder="Search">
        </div>
        <div class="absolute top-16 z-10 bg-white text-black max-h-[250px] overflow-y-scroll w-full left-0">
            <SearchBarTemplate
                v-for="card in filteredData" 
                :key="card.id" 
                :title="card.title"
                :name="card.name"
                :media="card.media_type"
            />
        </div>
        <div class="flex items-center cursor-pointer hover:rounded-full hover:bg-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                <path d="M6.485 17.669a2 2 0 002.829 0l-2.829-2.83a2 2 0 000 2.83zm4.897-12.191l-.725.725c-.782.782-2.21 1.813-3.206 2.311l-3.017 1.509c-.495.248-.584.774-.187 1.171l8.556 8.556c.398.396.922.313 1.171-.188l1.51-3.016c.494-.988 1.526-2.42 2.311-3.206l.725-.726a5.048 5.048 0 00.64-6.356 1.01 1.01 0 10-1.354-1.494c-.023.025-.046.049-.066.075a5.043 5.043 0 00-2.788-.84 5.036 5.036 0 00-3.57 1.478z"
                    fill="white" fill-rule="evenodd">
                </path>
            </svg>
        </div>
        <div class="border-solid border cursor-pointer px-1.5 py-0.5 border-gray-400">EN</div>
        <div class="border-2 border-solid bg-green-400 cursor-pointer rounded-full p-3.5"></div>
    </div>
</template>

<script>
import axios from 'axios';
import { HEADER, PAYLOADS } from '@/backend/Enums/MovieDataEnums';
import SearchBarTemplate from '../components/SearchBarTemplate.vue';
import debounce from 'debounce';

export default {
    components: {
      SearchBarTemplate,
    },

    data() {
        return {
            filteredData: [],
            isActive: true,
        }
    },

    methods: {
        async getSearchData (url) {
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

        debounceInput: debounce(function (event) {
            if (event.target.value.length >= 3) {
                this.getSearchData(PAYLOADS.SEARCH + event.target.value)
            } else {
                this.filteredData = [];
            }
        }, 500)
    }
}
</script>