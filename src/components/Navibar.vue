<script setup>
import { ref } from 'vue';
import '../assets/js/scroll-navbar';
import { userDataStore } from '../stores/user';
import dataservice from '../services/dataservice';
const isDropdownOpen = ref(false)
const isCategoriesOpen = ref(false)
const isCategoriesSubmenuOpen = ref(false)
const categories = ref()
let userStore = userDataStore()
const LoggedIn = ref(userStore.token != "")

dataservice.getAll("category")
    .then((resp) => {
        categories.value = resp.data;
        //console.log(categories.value);
    })
    .catch((err) => {
        console.log(err);
    });
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}
const toggleCategories = () => {
    isCategoriesOpen.value = !isCategoriesOpen.value;
}
const toggleCategoriesSubmenu = () => {
    isCategoriesSubmenuOpen.value = !isCategoriesSubmenuOpen.value;
}
</script>
<template>
    <div id="header" class="fixed-top sticky-top">
        <div class="container d-flex align-items-center">

            <h1 class="logo me-auto">
                <router-link class="router-link" to="/">
                    EduTron
                </router-link>
            </h1>

            <nav id="navbar" class="navbar navbar-expand-lg ">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto navbar-expand">
                        <li><router-link class="router-link" to="/" exact>Főoldal</router-link></li>
                        <li class="dropdown">
                            <span class="router-link" href="#" @click="toggleCategories">
                                <span>Kategóriák</span>
                                <i class="bi bi-chevron-down"></i>
                            </span>
                            <ul v-show="isCategoriesOpen">
                                <li class="dropdown" v-for="category in categories">
                                    <a @click="toggleCategoriesSubmenu" alt="egy kategória">
                                        {{ category.Name }}<i class="bi bi-chevron-right"></i>
                                    </a>
                                    <ul v-show="isCategoriesSubmenuOpen">
                                        <li>
                                            <RouterLink to="/tests/{{ category.ID }}/all" alt="elem">Összes</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/tests/{{ category.ID }}/trending" alt="elem">Népszerűek</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/tests/{{ category.ID }}/newest" alt="elem">Legújabb</RouterLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="router-link"><router-link to="/stats/{{ userStore.id }}">Statisztikák</router-link></li>
                        <li class="dropdown" v-if="LoggedIn">
                            <span class="router-link" href="#" @click="toggleDropdown">
                                <span>{{ userStore.name }}</span><i class="bi bi-chevron-down"></i>
                            </span>
                            <ul v-show="isDropdownOpen">
                                <li class="dropdown">
                                    <RouterLink to="/stats/{{ userStore.id }}">
                                        Saját tesztek <i class="bi bi-chevron-right"></i>
                                    </RouterLink>
                                    <RouterLink to="/">
                                        Kijelentkezés <i class="bi bi-chevron-right"></i>
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown" v-if="!LoggedIn">
                            <span class="router-link" href="#" @click="toggleDropdown">
                                <span>Fiók</span><i class="bi bi-chevron-down"></i>
                            </span>
                            <ul v-show="isDropdownOpen">
                                <li><ul class="dropdown">
                                    <li>
                                        <RouterLink to="/login">Bejelentkezés</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/register">Regisztráció</RouterLink>
                                    </li>
                                </ul></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->

            <router-link to="/register" class="get-started-btn" v-if="!LoggedIn">Regisztráció</router-link>
            <router-link to='/create' class="get-started-btn" v-if="LoggedIn">Készítés</router-link>

        </div>
    </div>
</template>
  

  
<style scoped></style>
  