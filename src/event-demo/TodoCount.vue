<template>
    <div>
        <h3>{{ items.length }}</h3>
    </div>
</template>

<script>
    import EventBus from './event-bus.js'
    export default {
        name: "TodoCount",
        data: function() {
            return {
                items: []
            };
        },
        mounted() {
            EventBus.$on('todo-add',  (data) => {
                this.items.push(data)
            });
        },
    }
</script>

<style scoped>

</style>