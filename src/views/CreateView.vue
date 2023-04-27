<script setup>
import { ref } from 'vue';

</script>

<template>
        <button type="button" class="btn get-started-btn btn-block mb-4" @click="create(test)">Teszt készítése</button>
        <button type="button" class="btn get-started-btn btn-block mb-4" @click="create(question)">Kérdés készítése</button>
    <form class="container text-center col-6 col-lg-4 col-md-6">
        <h1 class="logo me-auto router-link my-5">{{  }}készítés</h1>
        <div class="form-outline mb-4">
            <label class="form-label" for="email">Felhasználónév</label>
            <input type="text" id="username" class="form-control" />
        </div>
    </form>
</template>

<style></style>