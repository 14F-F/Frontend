<script setup>
import { ref } from "vue";
import { userDataStore } from "@/stores/user";
const user = userDataStore()
console.log(user)
</script>
<template>
    <form class="container text-center col-6 col-lg-4 col-md-6">
        <h1 class="logo me-auto router-link my-5">Bejelentkezés</h1>
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="email">Email address</label>
            <input type="email" id="email" class="form-control" />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="pw">Password</label>
            <input type="password" id="pw" class="form-control" />
        </div>

        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
            <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="saveToken" checked />
                    <label class="form-check-label" for="saveToken"> Remember me </label>
                </div>
            </div>

            <div class="col">
                <!-- Simple link -->
                <RouterLink to="#!">Elfelejtette jelszavát?</RouterLink>
            </div>
        </div>

        <!-- Submit button -->
        <button type="button" class="btn get-started-btn btn-block mb-4" @click="loggedIn(user)">Bejelentkezés</button>

        <!-- Register buttons -->
        <div class="text-center">
            <p>Nincs fiókja? <RouterLink to="/register">Regisztráljon!</RouterLink></p>
        </div>
    </form>
</template>