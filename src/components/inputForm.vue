<script setup>
import {ref} from 'vue';

const props = defineProps("list");
const name = ref("");


</script>

<template>
<div class="container">
    <h2>Új név</h2>
    <label class="form-label" for="nev">Név</label>
    <input v-model="name" class="form-control mb-3" type="text" id="nev" placeholder="Add meg a nevet">
    <button @click="$emit('putIntoList',name)" class="btn btn-primary">Mentés</button>
</div>
</template>

<style scoped>
</style>
