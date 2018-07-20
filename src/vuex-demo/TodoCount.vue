<template>
    <div>
        <h3>{{ count }}</h3>
    </div>
</template>

<script>
    export default {
        name: "TodoCount",
        computed: {
            count () {
                return this.$store.state.items.length
            }
        },
    }
</script>

<style scoped>

</style>