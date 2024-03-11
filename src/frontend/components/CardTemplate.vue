<template>
    <div class="flex justify-between items-center flex-col min-w-52">
        <img class="rounded-[50px]" :src="defaultUrl + posterPath">
        <div class="flex items-center h-10 justify-center text-center font-extrabold">
            {{ title }}
        </div>
        <div class=" opacity-50 font-semibold">
            {{ releaseDate }}
        </div>
        <div class="font-semibold">
            Vote: {{ Number(voteAverage.toFixed(1)) * 10 }}%
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        releaseDate: String,
        voteAverage: Number,
        posterPath: String,
        defaultUrl: String,
    }
}
</script>