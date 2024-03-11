<template>
    <button class="w-40 h-10 relative" 
        @click="$emit('dataChange', 0)"
        v-bind:class="{'button-change': isActive}"
        >
        Most Popular
    </button>
    <button class="w-40 h-10 relative" 
        @click="$emit('dataChange', 1)"
        v-bind:class="{'button-change': !isActive}"
        >
        Top Rated
    </button>
</template>

<script>
export default {
    props: {
        isActive: Boolean
    }
}
</script>