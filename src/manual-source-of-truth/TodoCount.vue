<template>
    <div>
        <h3>{{ data.items.length }}</h3>
    </div>
</template>

<script>
    export default {
        name: "TodoCount",
        data: function() {
            return {
                data: {
                    items: []
                }
            };
        },
        mounted() {
            this.data = this.$root.$data
        },
    }
</script>

<style scoped>

</style>