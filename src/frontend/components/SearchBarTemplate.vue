<template>
    <div class="flex items-center flex-row w-full border-gray-400 border-solid border-b-[1px] pl-[10px] left-0 h-9 gap-2">
                        <svg class="w-4 h-4 text-black" width="24" height="24" viewBox="0 0 24 24" role="presentation">
                    <path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                        fill="currentColor" fill-rule="evenodd">
                    </path>
                </svg>
        <div class="flex items-center ">
            {{ title || name }} ({{ media }})
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        name: String,
        media: String,
    }
}
</script>