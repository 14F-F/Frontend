<script setup>
import dataservice from '../services/dataservice.js'
import { ref } from 'vue'
import Menubar from '../components/Menubar.vue'
import Sidebar from '../components/Sidebar.vue'
import { useCategoryStore } from '../stores'

const categories = ref([])
const test = ref([])
const chosenCategory = ref()
let actTest = useCategoryStore()

dataservice.getAll("category")
    .then((resp) => {
        categories.value = resp.data;
        //console.log(categories.value);
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<template>
    <Menubar></Menubar>
    <Sidebar></Sidebar>
    <div class="container">
        <select name="" v-model="actTest.selCategory.id"  class="categories">
            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
        </select>
    </div>
</template>
