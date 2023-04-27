<script setup>
import dataservice from '../services/dataservice.js'
import { ref } from 'vue'
import { basicDataStore } from '../stores/basic'
import TestSlide from '../components/TestSlide.vue'
const categories = ref([])
const tests = ref([])
const chosenCategory = ref()
let actTest = basicDataStore()
dataservice.getAll("category")
    .then((resp) => {
        categories.value = resp.data;
        console.log(categories.value);
    })
    .catch((err) => {
        console.log(err);
    });
dataservice.getAll("test")
    .then((resp) => {
        tests.value = resp.data;
        console.log(tests.value);
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<template>
    <div class="container">
        <select v-if="categories.value != null" v-model="actTest.selCategory.id">
            <option v-for="category in categories" :value="category.id">
            <option>{{ category.Name }}</option>
            </option>
        </select>
        <div class="tests" v-if="tests.value != null">
            <div class="col-12">
                <h1>Felkapott tesztek</h1>
                <p>
                    <TestSlide :param="trending" :list="tests.value"/>
                </p>
            </div>
            <div class="col-12">
                <h1>Saját tesztek</h1>
                <p>
                    <TestSlide :param="owned" :list="tests.value"/>
                </p>
            </div>
            <div class="col-12">
                <h1>{{ (actTest.selCategory) }} tesztek</h1>
                <p>
                    <TestSlide :param="actTest.selCategory" :list="tests.value"/>
                </p>
            </div>
        </div>
    </div>
</template>
