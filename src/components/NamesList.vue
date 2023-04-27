<script setup>
import { ref } from "vue";
const props = defineProps(["title","list"]);
</script>
<template>
<div class="container">
    <h2 class="mt-3">{{ title }}</h2>
    <ul>
        <li v-for="(item,index) in list" :key="index">{{ item }}
            <button class="btn btn-danger mb-3 ms-4" 
            @click="$emit('deleteFromList',index)">Törlés</button></li>
    </ul>
    <button v-if="list.length > 0" class="btn btn-danger ms-4" @click="$emit('deleteList')">Lista törlése</button>
</div>
</template>

<style scoped>
li
{
    margin-right: 10%;
}
</style>
