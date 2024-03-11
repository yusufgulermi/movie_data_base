<template>
    <div class="flex gap-10 bg-[#242E34] text-white h-14">
        <nav class="flex gap-10 justify-between w-full">
            <div class="flex gap-10 items-center pl-5">
                <img src="../../public/logo.png" width="50" height="50" />
                <RouterLink to="/">Movies</RouterLink>
                <RouterLink to="/">TV Shows</RouterLink>
                <RouterLink to="/">People</RouterLink>
                <RouterLink to="/">More</RouterLink>
            </div>
            <TopHeader />
        </nav>
    </div>
    <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import TopHeader from './components/TopHeader.vue';
</script>

