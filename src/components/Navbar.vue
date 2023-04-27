<script setup>
import { basicDataStore } from "../stores/basic";
import { userDataStore } from "../stores/user";
let userStore = userDataStore();
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <RouterLink class="navbar-brand" to="#">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30">
                <text x="50%" y="50%" font-size="25" font-weight="bold" font-style="italic" font-family="monospace"
                        text-anchor="middle" dominant-baseline="middle">
                        <tspan fill="#00CED1">Edu</tspan>
                        <tspan fill="#90EE90" dx="-2">Tron</tspan>
                    </text>
                </svg> -->
            EduTron
        </RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/">Főoldal</RouterLink>
                </li>

                <li class="nav-item dropdown">
                    <RouterLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kategóriák
                    </RouterLink>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-for="category in categories">
                        <RouterLink class="dropdown-item" to="/tests">{{ category.ID }}</RouterLink>
                        <div class="dropdown-divider"></div>
                        <RouterLink class="dropdown-item" to="/statistics">Saját</RouterLink>
                    </div>
                </li>

                <li class="nav-item" v-if='userStore.token != ""'>
                    <RouterLink class="nav-link" to="/statistics">Statisztikák</RouterLink>
                </li>
            </ul>
            <ul class= "left navbar-nav mr-auto ">
                <li class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Keresés" aria-label="Search">
                </li>
                <li class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Keresés</button>
                </li>

                <li v-if='userStore.token != ""' class="nav-item dropdown">
                    <RouterLink class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ userStore.name }}
                    </RouterLink>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-for="category in categories">
                        <RouterLink class="dropdown-item" to="/tests">{{ category.ID }}</RouterLink>
                        <div class="dropdown-divider"></div>
                        <RouterLink class="dropdown-item" to="/statistics">Adatok</RouterLink>
                    </div>
                </li>
                <li v-if='userStore.token == ""' class="nav-item dropdown">
                    <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Fiók
                    </span>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <RouterLink class="dropdown-item" to="/login">Bejelentkezés</RouterLink>
                        <RouterLink class="dropdown-item" to="/register">Regisztráció</RouterLink>
                    </div>
                </li>
            </ul>


        </div>
    </nav>
</template>
<style></style>