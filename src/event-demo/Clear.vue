<template>
    <div>
        <!-- <button v-on:click="clear">Clear</button> -->
    </div>
</template>

<script>
    export default {
        name: "Clear",
        data: function() {
            return {
                items: []
            };
        },
    }
</script>

<style scoped>
    button{
        margin-top: 50px;
        height: 40px;
        background: red;
        border: 0;
        color: white;
        width: 200px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
    }
</style>