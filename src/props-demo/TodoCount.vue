<template>
    <div>
        <h3>{{ items.length }}</h3>
    </div>
</template>

<script>
    export default {
        name: "TodoCount",
        props: {
            items: Array
        },
    }
</script>

<style scoped>

</style>