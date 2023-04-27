<script setup>
import dataservice from '@/services/dataservice.js'
import { ref } from 'vue'
const newUser = ref({})
let error = ref()
const accepted = ref(false)
const saveToken = ref(false)

const register = (user) => {
    if (accepted.value) {
        dataservice.postVote(newUser.value)
            .then((resp) => {
                alert("OK")
            })
            .catch((err) => {
                error.value = err.response.data.message
                console.log(err);
            });
    }
    else {
        error.value = "Please accept the term of use!"
    }
}

const hibakezelo = () => {
    error.value = null
}

</script>
<template>
    <form class="container text-center col-6 col-lg-4 col-md-6">
        <h1 class="logo me-auto router-link my-5">Regisztráció</h1>
        <div class="form-outline mb-4">
            <label class="form-label" for="email">Felhasználónév</label>
            <input type="text" id="username" class="form-control" />
        </div>
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="email">Email cím</label>
            <input type="email" id="email" class="form-control" />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="pw">Password</label>
            <input type="password" id="pw" class="form-control" />
        </div>
        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
            <div class="col-12 my-4 d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form_check">
                    <input class="form-check-input" type="checkbox" value="" id="TermOfUse" />
                    <label class="form-check-label" for="TermOfUse"> Az ÁSZF feltételeinek elfogadása</label>
                </div>
            </div>
            <div class="col-12 my-4 d-flex justify-content-center">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="saveToken" />
                    <label class="form-check-label" for="saveToken"> Bejelentkezési adatok mentése </label>
                </div>
            </div>
        </div>

        <!-- Submit button -->
        <button type="button" class="btn get-started-btn btn-block mb-4" @click="register(newUser)">Regisztrálás</button>

        <!-- Register buttons -->
        <div class="text-center">
            <p>Van már fiókja? <RouterLink to="/login">Jelentkezzen be!</RouterLink>
            </p>
        </div>
    </form>
</template>